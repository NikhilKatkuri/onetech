// Import required modules and types
import { CMD } from "../models/commands.js";
import { TechConfig, TechEntry } from "../models/techstack.js";
import packagejson from "../../package.json" with { type: "json" };
import chalk from "chalk";
import { templateDir } from "./file.js";
import path from "path";
import TechData from "../data/TechStack.js";

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

class commands {
  private cmdCli: CMD | undefined = undefined;
  constructor(private args: any) {
    this.parseArgs();
  }

  // Parses CLI arguments and configures internal state accordingly
  private parseArgs() {
    const Args: string[] = this.args;

    // Case 1: No arguments passed
    if (Args.length === 0) {
      this.cmdCli = undefined;
      return;
    }
    // Case 2: Only one command passed (e.g, --help or --version)
    else if (Args.length === 1) {
      const news: CMD | undefined = cmds.find((options) =>
        options.cmd.includes(Args.toString())
      );

      this.cmdCli = news;
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
        dir,
        techConfig.base,
        techConfig.lang,
        techConfig.template
      );

      this.cmdCli = {
        name: "main",
        cmd: [],
        excuter: excutionPath,
      };
    }
  }
  // Execute CLI command if matched
  public run() {
    if (!this.cmdCli) {
      console.log(chalk.red("no command found!\n"));
      help();
      return;
    }
    if (this.cmdCli.name === "version")
      console.log(`using version : ${chalk.green(packagejson.version)}`);
    if (this.cmdCli.name === "help") {
      help();
    }
    if (this.cmdCli.name === "main") {
      console.log(this.cmdCli.excuter);
    }
  }
}

export default commands;
