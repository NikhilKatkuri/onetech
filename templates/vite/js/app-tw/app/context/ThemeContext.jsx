import { createContext, useState, useEffect } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "light";
};

// ThemeProvider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const applyTheme = (newTheme) => {
    // Remove both classes first
    document.documentElement.classList.remove("light", "dark");

    const finalTheme = newTheme === "system" ? getSystemTheme() : newTheme;

    document.documentElement.classList.add(finalTheme);
  };

  const toggleTheme = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // On mount, apply theme
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
