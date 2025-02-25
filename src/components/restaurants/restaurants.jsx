import RestaurantTab from "../tab/restaurant-tab.jsx";
import styles from "./restaurants.module.css";
import { Outlet } from "react-router";
import { useGetRestaurantsQuery } from "../../redux/servcies/api/api.js";

const Restaurants = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

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
    <>
      <div className={styles.tabs}>
        {data.map(({ id, name }) => (
          <RestaurantTab key={id} restaurantId={id} name={name} />
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Restaurants;
