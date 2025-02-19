import styles from "./restaurant-tab.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { NavLink } from "react-router";

const RestaurantTab = ({ restaurantId }) => {
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <NavLink
      to={`/restaurants/${restaurantId}`}
      className={({ isActive }) =>
        classNames(styles.tab, isActive && styles.active)
      }
    >
      {name}
    </NavLink>
  );
};

export default RestaurantTab;
