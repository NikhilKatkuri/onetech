// inquirer mini type
type PromptType<T = any> = {
  type: "input" | "list" | "confirm";
  name: string;
  message: string;
  validate?: (input: T) => boolean | string | Promise<boolean | string>;
  choices?: string[];
  default?: T;
};

 
export type { PromptType };
