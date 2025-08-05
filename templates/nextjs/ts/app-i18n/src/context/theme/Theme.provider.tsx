"use client";
import { type ReactNode, useCallback, useEffect, useState } from "react";
import { ThemeContext } from "./Theme.context";
import ThemeMode  from "@/types/ThemeMode";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>("system"); // temporary default

  const getSystemTheme = useCallback((): ThemeMode => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light"; // fallback
  }, []);

  const applyTheme = useCallback(
    (theme: ThemeMode) => {
      if (typeof document === "undefined") return;

      document.documentElement.classList.remove("light", "dark");

      const finalTheme = theme === "system" ? getSystemTheme() : theme;
      document.documentElement.classList.add(finalTheme);
    },
    [getSystemTheme]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme =
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as ThemeMode | null)
        : null;

    const initialTheme =
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
        ? storedTheme
        : getSystemTheme();

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, [getSystemTheme, applyTheme]);

  const toggleTheme = useCallback(
    (newTheme: ThemeMode) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      setTheme(newTheme);
      applyTheme(newTheme);
    },
    [applyTheme]
  ); 
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;