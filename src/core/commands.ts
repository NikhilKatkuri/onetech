// Import required modules and types
import { CMD } from "../models/commands.js";
import { TechConfig } from "../models/techstack.js";
import packagejson from "../../package.json" with { type: "json" };
import chalk from "chalk";
import { templateDir, userPath, userPathValidate } from "./file.js";
import path from "path";
import TechData from "../data/TechStack.js";
import { exec } from "child_process";
import prompt from "./promt.js";
import { UserPathValidate } from "../models/file.js";

// function for displaying commands and info
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
    `  ${chalk.yellow("-v, -version")}         Show the current version`
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

async function getValidProjectName(
  initial: string | undefined
): Promise<string> {
  // store initial value in currentdir var
  let currentDir: string | undefined = initial;
  // recursive loop for validating currentdir
  while (true) {
    // if currentdir is undefined
    if (currentDir === undefined) {
      currentDir = await new prompt().projectname();
      continue;
    } else {
      // validate project name for cross platform to avoid dir/path issues 2nd parameter t which is toggle between string & boolean
      const c = new prompt().validateProjectName(currentDir, true);
      // if false
      if (!c || currentDir.length === 0) {
        // takes new promt and validate dir
        currentDir = await new prompt().projectname();
        continue;
      }
      // now it check path is empty or not. also it creates an dir if not exits
      const p: UserPathValidate = await userPathValidate(userPath, currentDir);
      if (p.isEmpty) {
        return currentDir;
      }
    }
    // no control over loop till condition succeed
  }
}

//  class commands
class commands {
  // Cmd cli is command line interface (only ref for CmdCli not acutal defination).
  private cmdCli: CMD | undefined = undefined;
  // instance of prompt for taking inputs
  private prompt = new prompt();

  // args are passed by super main function
  constructor(private args: any) {}

  // parseArgs it checks args if exits or take via promt
  public async parseArgs(): Promise<boolean> {
    // intialize Args var for void this.args to write always
    const Args: string[] = this.args;

    // check verbose cmd
    const verbose: boolean = Args.includes("--v") || Args.includes("--verbose");

    // check help cmd
    const help: boolean = Args.includes("--h") || Args.includes("--help");

    // version cmd
    const version: boolean = Args.includes("-v") || Args.includes("-version");

    // if help excute it
    if (help) {
      this.cmdCli = {
        name: "help",
      };
      return verbose;
    }

    // if version shows current version
    if (version) {
      this.cmdCli = {
        name: "version",
      };
      return verbose;
    }

    // verbose info
    if (verbose) console.log(chalk.greenBright("verbose enabled"));

    // projectname: to identify via args
    const projectname = Args
      ? Args.filter((arg) => !(arg.startsWith("--") || arg.startsWith("--")))[0]
      : "";
    // dir :  getting correct and cross platform friendly dirname
    const dir = await getValidProjectName(projectname);

    // list _cmds: list of req var for main cmd
    const _cmds = ["--base=", "--lang=", "--template="];

    // type
    type CommandKeys = "base" | "lang" | "template";

    const techConfig: Record<CommandKeys, string | undefined> = {
      base: undefined,
      lang: undefined,
      template: undefined,
    };

    // iterations for get args from cmd if not make var as undefined
    for (const cmd of _cmds) {
      const key = cmd.replace(/^--|=$/g, "") as CommandKeys;
      const found = Args.find((arg) => arg.startsWith(cmd));
      techConfig[key] = found ? found.split("=")[1] : undefined;
    }

    // iterations for taking prompt from user, to get val of undefined var
    for (const [key, value] of Object.entries(techConfig)) {
      if (value === undefined) {
        if (key === "base") {
          techConfig["base"] = await this.prompt.projectBase();
        }

        const selectedBase = techConfig["base"];
        const techMatch = TechData.find((b) => b.base === selectedBase);

        if (selectedBase && techMatch) {
          if (key === "lang") {
            techConfig["lang"] =
              selectedBase !== "flutter"
                ? await this.prompt.projectLang(techMatch.lang as string[])
                : "";
          }

          if (key === "template") {
            techConfig["template"] = await this.prompt.projectTemplates(
              techMatch.templates
            );
          }
        }
      }
    }

    // type
    type config = { dir: string } & TechConfig;

    // final config
    const finalconfig: config = {
      dir: path.join(dir),
      ...(techConfig as TechConfig),
    };

    // excetution path to clone prebuilt templates based promts
    let executionPath = path.join(
      templateDir,
      finalconfig.base,
      finalconfig.lang,
      finalconfig.template,
      "onetech.js"
    );

    // cli
    this.cmdCli = {
      name: "main",
      cmd: `node ${executionPath}  ${finalconfig.dir}`,
    };

    return verbose;
  }

  // Execute CLI command if matched
  public async run(verbose: boolean = false) {
    //  cmdcli is undefined fallback case
    if (!this.cmdCli) {
      console.log(chalk.red("No command found!\n"));
      help();
      return;
    }

    // accessing var
    const { name, cmd } = this.cmdCli;

    if (verbose) {
      console.log(chalk.blueBright("→ Running CLI command:"), name);
    }

    //  based on names = version | help | main excutes
    switch (name) {
      case "version":
        console.log(`Using version: ${chalk.green(packagejson.version)}`);
        break;

      case "help":
        help();
        break;

      case "main":
        if (!cmd) {
          console.log(chalk.red("Invalid executor path or project directory."));
          return;
        }
        if (verbose) {
          console.log(chalk.cyan("→ Executor path:"), cmd);
        }

        await exec(cmd as string, (error, stdout, stderr) => {
          // error: If command fails to run or exits with non-zero code
          if (error) {
            console.error(chalk.red(`Execution error: ${error.message}`));
            return;
          }
          // stdout: Normal output of the command
          if (stdout) {
            console.log("\n\n" + stdout);
          }
          // stderr: Error output of the command
          if (stderr) {
            console.error(chalk.yellow("→ Script Error:\n") + stderr);
          }
        });
        break;
      // fallback
      default:
        console.log(chalk.red(`Unknown command: ${name}`));
        help();
        break;
    }
  }
}

export default commands;
