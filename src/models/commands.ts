type CMD = {
  name: string;
  cmd: string[];
  excuter?:string;
  description?: string;
  default?: boolean;
  projectDir?:string;
};

 


export type { CMD };
