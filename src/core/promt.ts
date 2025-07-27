import inquirer from "inquirer";
import { PromptType } from "../models/promt.js";
import TechData from "../data/TechStack.js";

class prompt {
  // main function of promt taking via inqurirer
  private async Prompts({
    type,
    name,
    message,
    choices,
    validate,
    default: defaultValue,
  }: PromptType) {
    let query: PromptType = { type, name, message };

    if (choices) {
      query.choices = choices;
    }
    if (validate) {
      query.validate = validate;
    }
    if (defaultValue) {
      query.default = defaultValue;
    }

    try {
      const answer = await inquirer.prompt(query);
      return answer[name];
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("❌ Prompt error:", error.message);
      } else {
        console.error("❌ An unknown error occurred during prompt.");
      }
      console.log("🔻 Cleaning up before exit...");
      process.exit(1);
    }
  }

  // takes input of projectname
  public async projectname() {
    const query: PromptType = {
      type: "input",
      name: "projectname",
      message: "Give a name of your project",
      validate: this.validateProjectName,
    };

    const answer = await this.Prompts(query);
    return answer;
  }
  // projectname/dir  validator
  public validateProjectName(
    input: string,
    t: boolean = false
  ): boolean | string {
    const trimmed = input.trim();

    if (!trimmed) return !t ? "Project name cannot be empty." : false;

    // Cross-platform invalid characters
    const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g;
    if (invalidChars.test(trimmed)) {
      return !t
        ? 'Name contains invalid characters: <>:"/\\|?* or control characters.'
        : false;
    }

    // Unix (Linux/macOS): disallow forward slash
    if (trimmed.includes("/")) {
      return !t
        ? "Name cannot contain '/' (used as path separator on Unix)."
        : false;
    }
    // onetech (rule): - should not startwith
    if (trimmed.startsWith("-")) {
      return !t ? "Name should not start with '-'." : false;
    }

    // Windows: reserved names
    const reserved = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
    if (reserved.test(trimmed)) {
      return !t
        ? "This name is reserved by the system. Choose a different name."
        : false;
    }

    // macOS (HFS+): colon is not allowed
    if (trimmed.includes(":")) {
      return !t
        ? "Colon ':' is not allowed in folder names (macOS restriction)."
        : false;
    }

    // Max length safety
    if (trimmed.length > 255) {
      return !t ? "Name is too long (max 255 characters)." : false;
    }

    return true;
  }
  // takes input of Base (eg:<vite>,<flutter>,<nextjs>)
  public async projectBase() {
    const query: PromptType = {
      type: "list",
      name: "Base",
      message: "choose your base",
      choices: TechData.map((items) => items.base),
    };

    const answer = this.Prompts(query);
    return answer;
  }
  // takes input of lang (eg:javascript|typescript)
  public async projectLang(langs: string[]) {
    const query: PromptType = {
      type: "list",
      name: "Lang",
      message: "choose lang",
      choices: langs,
    };

    const answer = await this.Prompts(query);
    return answer;
  }
  // takes input of prebuilt templates like app-tw(base+tailwind setup) app-firebase(base+firebas setup)
  public async projectTemplates(templates: string[]) {
    const query: PromptType = {
      type: "list",
      name: "template",
      message: "choose templates",
      choices: templates,
    };

    const answer = await this.Prompts(query);
    return answer;
  }
}

export default prompt;
