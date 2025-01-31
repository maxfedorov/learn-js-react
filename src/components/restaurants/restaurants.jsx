import { restaurants } from "../../constants/mock.js";
import Restaurant from "../restaurant/restaurant.jsx";
import { useState } from "react";
import Tab from "../tab/tab.jsx";
import styles from "./restaurants.module.css";

const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id,
  );
  const handleRestaurantSelection = ({ id }) => {
    setActiveRestaurantId(id);
  };
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId,
  );
  return (
    <>
      <div className={styles.tabs}>
        {restaurants.map((restaurant) => (
          <Tab
            isActive={restaurant.id === activeRestaurantId}
            key={restaurant.id}
            title={restaurant.name}
            onClick={() => handleRestaurantSelection(restaurant)}
          />
        ))}
      </div>
      <Restaurant
        name={activeRestaurant.name}
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
    </>
  );
};

export default Restaurants;
