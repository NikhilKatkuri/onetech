import { existsSync, mkdirSync, writeFileSync } from "fs";

import TechData from "../data/TechStack.js";
import { templateDir } from "./file.js";
import path from "path";
import chalk from "chalk";

for (const data of TechData) {
  let location;
  if (data.base === "flutter") {
    const d = data.templates;
    d.forEach((d) => {
      location = path.join(templateDir, data.base, d);
      console.log(location);
      if (!existsSync(location)) {
        mkdirSync(location, { recursive: true });
        console.log(chalk.green("done"));
      }
      try {
        writeFileSync(
          path.join(location, "onetech.js"),
          `// code here for app-cra to operate
import path from "path";
import chalk from "chalk";

 
// Get arguments from CLI
const args = process.argv.slice(2);
 
console.log(args[0]??"hi")


`
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
          console.log(chalk.green("done"));
        }
        try {
          writeFileSync(
            path.join(location, "onetech.js"),
            `// code here for app-cra to operate
import path from "path";
import chalk from "chalk";

 
// Get arguments from CLI
const args = process.argv.slice(2);
 
console.log(args[0]??"hi")


`
          );
          console.log(chalk.blue(`code here for ${d} to operate`));
        } catch (error) {
          console.log(error);
        }
      });
    });
  }
}
