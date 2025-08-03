"use client";

import ThemeMode  from "@/types/ThemeMode";
import React, { 
} from "react";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: (theme: ThemeMode) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export {ThemeContext}