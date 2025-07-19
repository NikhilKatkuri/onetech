type PromptType<T = any> = {
  type: "input" | "list" | "confirm";
  name: string;
  message: string;
  validate?: (input: T) => boolean | string | Promise<boolean | string>;
  choices?: Array<string | { name: string; value: T }>;
  default?: T;
};

 
export type { PromptType };
