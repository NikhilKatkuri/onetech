import fs, { existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { UserPathValidate } from "../models/file.js";

const __filename = fileURLToPath(import.meta.url);
// output : C:\Users\**\Onetech\src\core\file.ts
const __dirname = path.dirname(__filename);
// output : C:\Users\**\Onetech\src\core

const templateDir: string = path.join(__dirname, "..", "..", "templates");
// output : C:\Users\**\opensource\Onetech\templates

const userPath: string = process.cwd();

/**
 * Validates and ensures that a target directory exists at the given path.
 * If the directory does not exist, it will be created.
 * Also checks whether the directory is empty.
 *
 * @param userPath - The base path where the target directory is located.
 * @param targetDir - The name of the subdirectory to validate or create.
 * @param verbose - Optional flag to print log messages.
 *
 * @returns An object containing:
 *   @property location - The full path to the validated directory.
 *   @property isEmpty - A boolean indicating whether the directory is empty.
 */

const userPathValidate = async (
  userPath: string,
  targetDir: string,
  verbose: boolean = false
): Promise<UserPathValidate> => {
  try {
    const location = path.join(userPath, targetDir);
    if (!existsSync(location)) {
      // if location does not exits
      mkdirSync(location, { recursive: true });

      if (verbose) console.log("created path : " + location);

      return {
        location: location,
        isEmpty: true,
      };
    }

    // if location does exits
    if (verbose) console.log("already exits : " + location);

    const file = fs.readdirSync(location);
    return {
      location: location,
      isEmpty: file.length === 0,
    };
  } catch (error) {
    // error handling
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw error;
    }
  }
};

export { userPath, templateDir, userPathValidate };
