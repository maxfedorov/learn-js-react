import DishCounter from "../dish-counter/dish-counter.jsx";
import styles from "./dish.module.css";
import { use } from "react";
import { AuthContext } from "../auth-context/index.js";
import { Link } from "react-router";

const Dish = ({ title, dishId }) => {
  const { auth } = use(AuthContext);

  return (
    <div className={styles.dish}>
      <Link to={`/dish/${dishId}`}>{title}</Link>
      {auth.userName && <DishCounter dishId={dishId} />}
    </div>
  );
};

export default Dish;
