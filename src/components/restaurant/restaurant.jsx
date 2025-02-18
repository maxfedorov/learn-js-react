import styles from "./restaurant.module.css";
import { Outlet } from "react-router";
import { RestaurantLink } from "../restaurant-link/restaurant-link.jsx";

const Restaurant = ({ name }) => {
  return (
    <div className={styles.restaurant}>
      <h2 className={styles.heading}>{name}</h2>
      <RestaurantLink to={`menu`}>Menu</RestaurantLink>
      <RestaurantLink to={`reviews`}>Reviews</RestaurantLink>
      <Outlet />
    </div>
  );
};

export default Restaurant;
