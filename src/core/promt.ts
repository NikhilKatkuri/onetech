import inquirer from "inquirer";
import { PromptType } from "../models/promt.js";

class prompt {
  // constructor(private techstack: any) {}

  private async Prompts({
    type,
    name,
    message,
    validate,
    choices,
    default: defaultValue,
  }: PromptType) {
    let query: PromptType = { type, name, message };
    if (validate) {
      query.validate = validate;
    }
    if (choices) {
      query.choices = choices;
    }
    if (defaultValue) {
      query.default = defaultValue;
    }
    const answer = await inquirer.prompt(query as any);
    return answer[name];
  }

  public async projectname() {
    const query: PromptType = {
      type: "input",
      name: "ProjectName",
      message: "Give a name of your project",
    };

    const answer = await this.Prompts(query);
    return answer;
  }

  public async projectBase() {
    const query: PromptType = {
      type: "list",
      name: "Base",
      message: "choose your base",
      choices: ["vite", "React"],
    };

    const answer = await this.Prompts(query);
    return answer;
  }
}

export default prompt;
