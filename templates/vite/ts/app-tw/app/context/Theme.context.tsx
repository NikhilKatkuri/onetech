import { createContext } from "react";

export type ValueType = string;

interface ThemeContextType {
  value: ValueType;
  setValue: (val: ValueType) => void;
  setTheme: (theme: ValueType) => void; 
  toggleTheme: () => void;  
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);



export { ThemeContext };
