import { use } from "react";
import { ThemeContext } from "../theme-context/index.js";
import styles from "./button.module.css";
import classNames from "classnames";

const Button = ({ children, onClick, size = "M", disabled }) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        theme === "light" ? styles.light : styles.dark,
        size === "M" ? styles.sizeM : styles.sizeL,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
