import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const lightTheme = () => {
    localStorage.setItem("theme", "light");
    setTheme(localStorage.getItem("theme"));
  };
  const darkTheme = () => {
    localStorage.setItem("theme", "dark");
    setTheme(localStorage.getItem("theme"));
  };
  const systemTheme = () => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    isDarkMode
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
    setTheme(localStorage.getItem("theme"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, lightTheme, darkTheme, systemTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
