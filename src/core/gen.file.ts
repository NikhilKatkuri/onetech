import { existsSync, mkdirSync, writeFileSync } from "fs";

import TechData from "../data/TechStack.js";
import { templateDir } from "./file.js";
import path from "path";
import chalk from "chalk";

var onetechScriptContent = (input:string) => {
  return `
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
    console.log("Project created at: "+ chalk.green(\`\${chalk.bold(arg)}\`));
    console.log(chalk.yellow("You can now start building your ${input} app."));
    console.log(chalk.gray("Happy coding."));
  } catch (error) {
    console.error(chalk.red("Error:"), error.message);
  }
}

await __main__();
`;
};

for (const data of TechData) {
  let location;
  if (data.base === "flutter") {
    const d = data.templates;
    d.forEach((d) => {
      location = path.join(templateDir, data.base, d);
      console.log(location);
      if (!existsSync(location)) {
        mkdirSync(location, { recursive: true });
        mkdirSync(path.join(location, "code"), { recursive: true });
        console.log(chalk.green("done"));
      }
      try {
        writeFileSync(
          path.join(location, "onetech.js"),
          onetechScriptContent(data.base)
        );
        console.log(chalk.blue(`code here for ${d} to operate`));
      } catch (error) {
        console.log(error);
      }
    });
  } else {
    const lang: string[] = data.lang as any;
    lang.forEach((l) => {
      const d = data.templates;
      d.forEach((d) => {
        location = path.join(templateDir, data.base, l, d);
        console.log(location);
        if (!existsSync(location)) {
          mkdirSync(location, { recursive: true });
          mkdirSync(path.join(location, "code"), { recursive: true });
          console.log(chalk.green("done"));
        }
        try {
          writeFileSync(
            path.join(location, "onetech.js"),
            onetechScriptContent(data.base)
          );
          console.log(chalk.blue(`code here for ${d} to operate`));
        } catch (error) {
          console.log(error);
        }
      });
    });
  }
}
