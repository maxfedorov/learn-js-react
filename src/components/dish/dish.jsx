import DishCounter from "../dish-counter/dish-counter.jsx";
import styles from "./dish.module.css";

const Dish = ({ title }) => {
  return (
    <div className={styles.dish}>
      {title}
      <DishCounter />
    </div>
  );
};

export default Dish;
