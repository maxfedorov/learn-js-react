import { Link } from "react-router";
import styles from "./restaurant-link.module.css";

export const RestaurantLink = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};
