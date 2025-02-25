import styles from "./menu.module.css";
import DishContainer from "../dish/dish-container.jsx";
import { useParams } from "react-router";
import { useGetRestaurantDishesByIdQuery } from "../../redux/servcies/api/api.js";

const Menu = () => {
  const { restaurantId } = useParams();

  const { data, isLoading, isError } =
    useGetRestaurantDishesByIdQuery(restaurantId);

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data?.length) {
    return null;
  }

  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <ul className={styles.menuItems}>
        {data.length === 0 ? (
          <span>Menu is empty</span>
        ) : (
          data.map(({ id, name }) => (
            <li key={id} className={styles.menuItem}>
              <DishContainer dishName={name} dishId={id} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Menu;
