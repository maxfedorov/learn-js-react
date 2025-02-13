import styles from "./restaurant-tab.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";

const RestaurantTab = ({ restaurantId, isActive, onClick }) => {
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={classNames(styles.tab, isActive && styles.active)}
    >
      {name}
    </button>
  );
};

export default RestaurantTab;
