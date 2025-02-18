import styles from "./menu.module.css";
import DishContainer from "../dish/dish-container.jsx";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Menu = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { menu } = restaurant || {};
  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <ul className={styles.menuItems}>
        {menu.length === 0 ? (
          <span>Menu is empty</span>
        ) : (
          menu.map((id) => (
            <li key={id} className={styles.menuItem}>
              <DishContainer dishId={id} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Menu;
