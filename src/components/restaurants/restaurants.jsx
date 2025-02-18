import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
import RestaurantTab from "../tab/restaurant-tab.jsx";
import styles from "./restaurants.module.css";
import { Outlet } from "react-router";

const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <>
      <div className={styles.tabs}>
        {restaurantsIds.map((id) => (
          <RestaurantTab key={id} restaurantId={id} />
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Restaurants;
