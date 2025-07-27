import chalk from "chalk";
import fs from "fs";
import path from "path"; 

// Enable color support
chalk.level = 3;

// Get CLI argument (destination path)
const args = process.argv.slice(2);
const destination = path.join(process.cwd(), args[0]);
const templatepath = args[1];

// Recursively rename files starting with "_" to "."
function renameUnderscoreFiles(dir: any) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      renameUnderscoreFiles(fullPath); // recurse into subfolder
    } else if (entry.name.startsWith("_")) {
      const newName = "." + entry.name.slice(1);
      const newPath = path.join(dir, newName);
      fs.renameSync(fullPath, newPath);
    }
  }
}

async function __main__() {
  try {
    if (!args) {
      throw new Error(
        "Missing destination path. Usage: node onetech.js <destination>"
      );
    }

    // Setup project folder
    fs.cpSync(templatepath, destination, { recursive: true });
    // 🔧 Rename files
    renameUnderscoreFiles(templatepath);

    // Final success message
    console.log(chalk.blueBright("OneTech Project Setup Complete"));
    console.log(
      "Project created at: " + chalk.green(`${chalk.bold(destination)}`)
    );
    console.log(chalk.yellow("You can now start building your vite app."));
    console.log(chalk.gray("Happy coding."));
  } catch (error) {
    console.error(
      chalk.red("Error:"),
      error instanceof Error ? error.message : error
    );
  }
 
}

await __main__();
