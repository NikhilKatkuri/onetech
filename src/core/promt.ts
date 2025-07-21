import inquirer from "inquirer";
import { PromptType } from "../models/promt.js";
import TechData from "../data/TechStack.js";

function validateProjectName(input: string): boolean | string {
  const trimmed = input.trim();

  if (!trimmed) return "Project name cannot be empty.";

  // Cross-platform invalid characters
  const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g;
  if (invalidChars.test(trimmed)) {
    return 'Name contains invalid characters: <>:"/\\|?* or control characters.';
  }

  // Unix (Linux/macOS): disallow forward slash
  if (trimmed.includes("/")) {
    return "Name cannot contain '/' (used as path separator on Unix).";
  }

  // Windows: reserved names
  const reserved = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
  if (reserved.test(trimmed)) {
    return "This name is reserved by the system. Choose a different name.";
  }

  // Windows: trailing dot or space not allowed
  if (/[. ]$/.test(trimmed)) {
    return "Name cannot end with a dot or space (Windows limitation).";
  }

  // macOS (HFS+): colon is not allowed
  if (trimmed.includes(":")) {
    return "Colon ':' is not allowed in folder names (macOS restriction).";
  }

  // Max length safety
  if (trimmed.length > 255) {
    return "Name is too long (max 255 characters).";
  }

  return true;
}

class prompt {
  // constructor(private techstack: any) {}

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

  public async projectname() {
    const query: PromptType = {
      type: "input",
      name: "projectname",
      message: "Give a name of your project",
      validate: validateProjectName,
    };

    const answer = await this.Prompts(query);
    return answer;
  }

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
