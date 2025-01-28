import { restaurants } from "../../constants/mock.js";
import Restaurant from "../restaurant/Restaurant.jsx";
import { useState } from "react";
import Tab from "../tab/Tab.jsx";

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
      {restaurants.map((restaurant) => (
        <Tab
          isActive={restaurant.id === activeRestaurantId}
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => handleRestaurantSelection(restaurant)}
        />
      ))}
      <Restaurant
        key={activeRestaurantId}
        name={activeRestaurant.name}
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
    </>
  );
};

export default Restaurants;
