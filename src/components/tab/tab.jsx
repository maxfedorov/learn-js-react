import styles from "./tab.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";

const Tab = ({ restaurantId, isActive, onClick }) => {
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

export default Tab;
