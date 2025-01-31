import { use } from "react";
import { ThemeContext } from "../theme-context/index.js";
import Button from "../button/button.jsx";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return <Button onClick={toggleTheme}>{theme}</Button>;
};

export default ToggleThemeButton;
