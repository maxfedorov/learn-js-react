import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import Restaurant from "./restaurant.jsx";

const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu, reviews } = restaurant || {};

  return <Restaurant name={name} dishesIds={menu} reviewsIds={reviews} />;
};

export default RestaurantContainer;
