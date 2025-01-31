import { useState } from "react";
import { ThemeContext } from "./index.js";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
