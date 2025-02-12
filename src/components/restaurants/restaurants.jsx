import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
import { useState } from "react";
import Tab from "../tab/tab.jsx";
import styles from "./restaurants.module.css";
import RestaurantContainer from "../restaurant/restaurant-container.jsx";

const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds?.[0],
  );
  const handleRestaurantSelection = (id) => {
    setActiveRestaurantId(id);
  };

  return (
    <>
      <div className={styles.tabs}>
        {restaurantsIds.map((id) => (
          <Tab
            isActive={id === activeRestaurantId}
            key={id}
            restaurantId={id}
            onClick={() => handleRestaurantSelection(id)}
          />
        ))}
      </div>
      <RestaurantContainer id={activeRestaurantId} />
    </>
  );
};

export default Restaurants;
