import styles from "./menu.module.css";
import DishContainer from "../dish/dish-container.jsx";

const Menu = ({ dishesIds }) => {
  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <ul className={styles.menuItems}>
        {dishesIds.length === 0 ? (
          <span>Menu is empty</span>
        ) : (
          dishesIds.map((id) => (
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
