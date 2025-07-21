// Import required modules and types
import { CMD } from "../models/commands.js";
import { TechConfig, TechEntry } from "../models/techstack.js";
import packagejson from "../../package.json" with { type: "json" };
import chalk from "chalk";
import { templateDir, userPath, userPathValidate } from "./file.js";
import path from "path";
import TechData from "../data/TechStack.js";
import { exec } from "child_process";
import prompt from "./promt.js";
import { UserPathValidate } from "../models/file.js";

// Displays help message for the CLI usage
function help() {
  console.log(
    `\n📦 create-onetech-app using version: ${chalk.green(packagejson.version)}\n`
  );

  console.log(`${chalk.bold("Usage:")}`);
  console.log(
    `  create-onetech-app ${chalk.cyan("<project-name>")} [options]\n`
  );

  console.log(`${chalk.bold("Options:")}`);
  console.log(
    `  ${chalk.yellow("-v, --version")}         Show the current version`
  );
  console.log(
    `  ${chalk.yellow("--verbose, --v")}        Enable verbose output`
  );
  console.log(
    `  ${chalk.yellow("--template")}             Choose a template (e.g., vite-react)`
  );
  console.log(
    `  ${chalk.yellow("--lang")}                 Set language (ts/js)`
  );
  console.log(
    `  ${chalk.yellow("--stacks")}               Add stacks like tailwind, firebase`
  );
  console.log(
    `  ${chalk.yellow("--usenpm")}               Use npm instead of yarn`
  );
  console.log(
    `  ${chalk.yellow("-h, --help")}             Show this help message\n`
  );

  console.log(`${chalk.bold("Example:")}`);
  console.log(
    `  create-onetech-app my-app --template vite-react --lang ts --stacks tailwind,firebase --usenpm --verbose\n`
  );
}

// List of supported command options and their aliases
const cmds: CMD[] = [
  {
    name: "version",
    cmd: ["-v", "--version"],
  },
  {
    name: "verbose",
    cmd: ["--v", "--verbose"],
  },
  {
    name: "help",
    cmd: ["--h", "--help"],
  },
];

// Utility to remove '--' prefix from CLI flags
function removeFlag(name: string): string {
  return name.replace(/^--/, "");
}

/**
 * Prompts the user to enter a valid project name (directory name).
 *
 * - Starts with an initial name provided via CLI.
 * - Validates if the corresponding path is empty (or doesn't exist).
 * - If the path is not empty, recursively prompts the user until
 *   an available directory name is provided.
 * - Exits the process if the user provides no input.
 *
 * @param initial - The initial project name provided via CLI.
 * @returns A valid (empty or non-existing) project directory name.
 */

async function getValidProjectName(initial: string): Promise<string> {
  let currentDir = initial;

  while (true) {
    const p: UserPathValidate = await userPathValidate(userPath, currentDir);

    if (p.isEmpty) {
      return currentDir;
    }

    console.log(chalk.red(p.location) + " is not empty.");

    const newInput = await new prompt().projectname();
    if (!newInput) {
      console.log(chalk.red("No name provided. Exiting."));
      process.exit(1);
    }

    currentDir = newInput;
  }
}

/**
 * The `commands` class is responsible for parsing CLI arguments,
 * validating inputs, and executing appropriate actions for the
 * `create-onetech-app` CLI tool.
 *
 * 🚀 Responsibilities:
 * - Parse command-line arguments (e.g., project name, flags, template config).
 * - Handle special commands like `--help`, `--version`, and `--verbose`.
 * - Validate the provided project directory (prompt if already exists).
 * - Validate the selected stack configuration (base, language, template).
 * - Construct the path to the selected template and execute its `onetech.js`.
 *
 * 📦 Command types handled:
 * - Version (`-v`, `--version`)
 * - Help (`--h`, `--help`)
 * - Verbose logging (`--v`, `--verbose`)
 * - Project scaffolding with options like:
 *   `create-onetech-app <project-name> --base=vite --lang=ts --template=app-tw`
 *
 * 🧠 Design Notes:
 * - All user interactions (directory checks, prompts) are async.
 * - The CLI can dynamically execute template scripts via `child_process.exec`.
 * - Structured for future extension with subcommands or plugin systems.
 *
 * 🔄 Lifecycle:
 * 1. Constructor takes `process.argv.slice(2)`
 * 2. `init()` performs async parsing, prompting, and validation
 * 3. `run()` executes the appropriate command logic
 */

class commands {
  private cmdCli: CMD | undefined = undefined;
  private prompt = new prompt();
  constructor(private args: any) {}

  // Parses CLI arguments and configures internal state accordingly
  public async parseArgs() {
    const Args: string[] = this.args;

    // Case 1: No arguments passed
    if (Args.length === 0) {
      const name: string = await this.prompt.projectname();
      const base: string = await this.prompt.projectBase();
      let lang: string;
      if (base === "flutter") {
        lang = TechData.filter((b) => b.base === base).map(
          (b) => b.lang
        )[0] as string;
      } else {
        lang = await this.prompt.projectLang(
          TechData.filter((b) => b.base === base)[0].lang as string[]
        );
      }
      const templates = await this.prompt.projectTemplates(
        TechData.filter((b) => b.base === base)[0].templates
      );
      const excutionPath = path.join(
        templateDir,
        base,
        base !== "flutter" ? lang : "",
        templates
      );
      const valDir = await getValidProjectName(name);
      this.cmdCli = {
        name: "main",
        cmd: [],
        excuter: excutionPath,
        projectDir: valDir,
      };
      return false;
    }
    // Case 2: Only one command passed (e.g, --help or --version)
    else if (Args.length === 1) {
      const news: CMD | undefined = cmds.find((options) =>
        options.cmd.includes(Args.toString())
      );

      this.cmdCli = news;
      return false;
    }
    // Case 3: More than one argument, treat as project setup
    else if (Args.length >= 1) {
      let excutionPath = templateDir;

      // Filter out verbosity flags and remove '--' from remaining args

      let cliArgs: string[] = Args.filter(
        (arg) => arg !== "--v" && arg !== "--verbose"
      ).map((arg) => removeFlag(arg));

      // Enable verbose logging if applicable

      const verbose = Args.includes("--v") || Args.includes("--verbose");
      if (verbose) {
        console.log("Verbose enabled");
      }

      // Extract project name and options

      const [dir, ...tools] = cliArgs;

      let valDir: string = await getValidProjectName(dir);

      // Initialize configuration holder

      const techConfig: TechConfig = {
        base: "",
        lang: "",
        template: "",
        notes: "",
      };

      // Populate configuration from CLI args

      for (const tool of tools) {
        if (tool.includes("base=")) techConfig.base = tool.split("=")[1];
        if (tool.includes("lang=")) techConfig.lang = tool.split("=")[1];
        if (tool.includes("template="))
          techConfig.template = tool.split("=")[1];
      }

      // Validate against tech stack definitions

      const config: TechEntry | undefined = TechData.find(
        (a) => a.base == techConfig.base
      );

      // Check if language is supported
      if (!config) {
        console.log("error found from config");
      } else {
        if (
          config.base !== "flutter" &&
          !config.lang.includes(techConfig.lang)
        ) {
          console.log(`lang no found ${techConfig.lang} in ${config}`);
        }
        // Skip template check for Flutter; validate otherwise
        if (!config.templates.includes(techConfig.template)) {
          console.log(`template no found ${techConfig.template} in ${config}`);
        }
      }

      // Construct the path to use for scaffolding the project
      excutionPath = path.join(
        excutionPath,
        techConfig.base,
        techConfig.lang,
        techConfig.template
      );

      this.cmdCli = {
        name: "main",
        cmd: [],
        excuter: excutionPath,
        projectDir: valDir,
      };

      if (verbose) {
        console.log(chalk.cyan("→ Parsed Command:"), this.cmdCli.name);
        console.log(
          chalk.cyan("→ Executing script at:"),
          this.cmdCli.projectDir
        );
      }
      return verbose;
    }
  }
  // Execute CLI command if matched
  public async run(verbose: boolean = false) {
    if (!this.cmdCli) {
      console.log(chalk.red("No command found!\n"));
      help();
      return;
    }

    const { name, excuter, projectDir } = this.cmdCli;

    if (verbose) {
      console.log(chalk.blueBright("→ Running CLI command:"), name);
    }

    switch (name) {
      case "version":
        console.log(`Using version: ${chalk.green(packagejson.version)}`);
        break;

      case "help":
        help();
        break;

      case "main":
        if (!excuter || !projectDir) {
          console.log(chalk.red("Invalid executor path or project directory."));
          return;
        }

        const location = path.join(excuter, "onetech.js");
        const command = `node "${location}" ${projectDir}`;

        if (verbose) {
          console.log(chalk.cyan("→ Executor path:"), excuter);
          console.log(chalk.cyan("→ Project directory:"), projectDir);
          console.log(chalk.cyan("→ Executing command:"), command);
        }

        await exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(chalk.red(`Execution error: ${error.message}`));
            return;
          }

          if (verbose && stdout) {
            console.log(chalk.gray("→ Script Output:\n") + stdout);
          }

          if (stderr) {
            console.error(chalk.yellow("→ Script Error:\n") + stderr);
          }
        });
        break;

      default:
        console.log(chalk.red(`Unknown command: ${name}`));
        help();
        break;
    }
  }
}

export default commands;
