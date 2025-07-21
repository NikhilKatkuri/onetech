
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Enable color support
chalk.level = 3;

// Get CLI argument (destination path)
const arg = process.argv[2];

// Resolve __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "code");

async function __main__() {
  try {
    if (!arg) {
      throw new Error("Missing destination path. Usage: node onetech.js <destination>");
    }

    // Setup project folder
    fs.cpSync(source, arg, { recursive: true });

    // Final success message
    console.log(chalk.blueBright("OneTech Project Setup Complete"));
    console.log("Project created at: "+ chalk.green(`${chalk.bold(arg)}`));
    console.log(chalk.yellow("You can now start building your electron app."));
    console.log(chalk.gray("Happy coding."));
  } catch (error) {
    console.error(chalk.red("Error:"), error.message);
  }
}

await __main__();
