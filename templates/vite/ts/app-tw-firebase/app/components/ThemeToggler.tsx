import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggler = () => {
  const { toggleTheme, theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  // Map index to theme
  const themes = ["system", "light", "dark"];

  // Sync activeIndex with current theme on mount
  useEffect(() => {
    const themes = ["system", "light", "dark"];
    const index = themes.indexOf(theme);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [theme]);

  const handleThemeClick = (index: number) => {
    console.log(index);
    const selectedTheme = themes[index];
    toggleTheme(selectedTheme);
    setActiveIndex(index);
  };

  // Move background slider to selected icon
  const sliderOffset = `translateX(${activeIndex * 100}%)`;

  return (
    <div className="relative grid grid-cols-3 items-center px-2 py-2 bg-gray-200 dark:bg-neutral-50/10 rounded-full w-fit [--stroke-color:#000]">
      {/* Slider background */}
      <span
        className="absolute h-6 w-6 rounded-full ml-2 bg-white transition-transform duration-300 ease-in-out"
        style={{ transform: sliderOffset }}
      />

      {/* Icons */}
      {themes.map((mode, i) => (
        <button
          key={mode}
          onClick={() => handleThemeClick(i)}
          className="h-6 w-6 flex items-center justify-center z-10 cursor-pointer"
        >
          {mode === "system" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={`size-4 stroke-[var(--stroke-color)] ${
                activeIndex !== 0 &&
                "dark:[--stroke-color:var(--color-neutral-200)]"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          )}

          {mode === "light" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={`size-4 stroke-[var(--stroke-color)] ${
                activeIndex !== 1 &&
                "dark:[--stroke-color:var(--color-neutral-200)]"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}

          {mode === "dark" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-4 stroke-[var(--stroke-color)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggler;
