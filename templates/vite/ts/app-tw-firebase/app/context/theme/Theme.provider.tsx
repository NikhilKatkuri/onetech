import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./Theme.context";

// Define allowed theme values
type ThemeMode = "light" | "dark" | "system";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getSystemTheme = (): ThemeMode =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const getInitialTheme = (): ThemeMode => {
    const storedTheme = localStorage.getItem("theme") as ThemeMode | null;
    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      return storedTheme;
    }
    return getSystemTheme();
  };

  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  const applyTheme = (theme: ThemeMode) => {
    // Remove both classes to avoid overlap
    document.documentElement.classList.remove("light", "dark");

    const finalTheme = theme === "system" ? getSystemTheme() : theme;

    document.documentElement.classList.add(finalTheme);
  };

  const toggleTheme = (newTheme: ThemeMode) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
