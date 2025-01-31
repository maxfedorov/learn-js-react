import styles from "./header.module.css";
import ToggleThemeButton from "../toggle-theme-button/toggle-theme-button.jsx";
import LoginButton from "../login-button/login-button.jsx";

function Header({ children }) {
  return (
    <header className={styles.header}>
      <span className={styles.text}>{children}</span>
      <LoginButton className={styles.toggle} />
      <ToggleThemeButton className={styles.toggle} />
    </header>
  );
}

export default Header;
