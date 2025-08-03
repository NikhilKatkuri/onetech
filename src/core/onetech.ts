import chalk from "chalk";
import fs from "fs";
import path, { basename } from "path";
import TechData from "../data/TechStack.js";
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

// Update package.json name
function updatePackageName(destination: string) {
  const pkgPath = path.join(destination, "package.json");
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      const folderName = path.basename(destination);
      pkg.name = folderName;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    } catch (err) {
      console.error(chalk.red("Failed to update package.json"), err);
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
    renameUnderscoreFiles(destination);
    // 🔄 Replace name in package.json
    updatePackageName(destination);
    // Final success message

    const templateName = TechData.find((tech) =>
      templatepath.includes(tech.base)
    );

    console.log(
      chalk.whiteBright(
        `Creating a new ${templateName?.base} app in ${chalk.greenBright(destination)}`
      )
    );
    console.log(
      `cd ${path.basename(destination)} ${templateName?.base !== "flutter" && "\nnpm install"}`
    ); 
    console.log("Happy coding.");
  } catch (error) {
    console.error(
      chalk.red("Error:"),
      error instanceof Error ? error.message : error
    );
  }
}

await __main__();
