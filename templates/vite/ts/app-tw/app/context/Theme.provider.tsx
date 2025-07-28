import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext, type ValueType } from "./Theme.context";
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    if (!window.matchMedia) return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const [value, setValue] = useState<string>(getInitialTheme);
  // Apply theme to document and persist in localStorage
  useEffect(() => {
    if (value === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
      document.documentElement.classList.toggle(
        "light",
        systemTheme === "light"
      );
      localStorage.removeItem("theme"); // Remove stored theme to follow system
    } else {
      document.documentElement.classList.toggle("dark", value === "dark");
      document.documentElement.classList.toggle("light", value === "light");
      localStorage.setItem("theme", value);
    }
  }, [value]);

  // Listen for system theme changes when in "system" mode
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (event: MediaQueryListEvent) => {
      if (value === "system" || !localStorage.getItem("theme")) {
        const systemTheme = event.matches ? "dark" : "light";
        document.documentElement.classList.toggle(
          "dark",
          systemTheme === "dark"
        );
        document.documentElement.classList.toggle(
          "light",
          systemTheme === "light"
        );
      }
    };

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, [value]);

  // Function to set a specific theme
  const setTheme = (theme: ValueType) => {
    setValue(theme);
  };

  // Function to toggle theme (optional, kept for backward compatibility)
  const toggleTheme = () => {
    setValue((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ value, setValue, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
