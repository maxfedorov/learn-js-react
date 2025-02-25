import styles from "./restaurant-tab.module.css";
import classNames from "classnames";
import { NavLink } from "react-router";

const RestaurantTab = ({ restaurantId, name }) => {
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
