import styles from "./footer.module.css";

function Footer({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}

export default Footer;
