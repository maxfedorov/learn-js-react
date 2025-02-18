import styles from "./restaurant-tab.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { NavLink } from "react-router";

const RestaurantTab = ({ restaurantId, onClick }) => {
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <NavLink to={`/restaurants/${restaurantId}`}>
      {({ isActive }) => (
        <button
          onClick={onClick}
          disabled={isActive}
          className={classNames(styles.tab, isActive && styles.active)}
        >
          {name}
        </button>
      )}
    </NavLink>
  );
};

export default RestaurantTab;
