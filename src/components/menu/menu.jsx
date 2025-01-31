import Dish from "../dish/dish.jsx";
import styles from "./menu.module.css";

const Menu = ({ menu }) => {
  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <ul className={styles.menuItems}>
        {menu.length === 0 ? (
          <span>Menu is empty</span>
        ) : (
          menu.map(({ id, name }) => (
            <li key={id} className={styles.menuItem}>
              <Dish title={name} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Menu;
