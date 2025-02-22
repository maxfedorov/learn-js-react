import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice.js";
import RestaurantTab from "../tab/restaurant-tab.jsx";
import styles from "./restaurants.module.css";
import { Outlet } from "react-router";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants.js";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants.jsx";
import { useRequest } from "../../redux/entities/hooks/use-request.js";

const Restaurants = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantIds);

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return "loading...";
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "error";
  }

  if (!restaurantsIds.length) {
    return null;
  }

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
