import DishCounter from "../dish-counter/dish-counter.jsx";
import styles from "./dish.module.css";
import { use } from "react";
import { AuthContext } from "../auth-context/index.js";

const Dish = ({ title }) => {
  const { auth } = use(AuthContext);

  return (
    <div className={styles.dish}>
      {title}
      {auth.userName && <DishCounter />}
    </div>
  );
};

export default Dish;
