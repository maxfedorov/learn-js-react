import RestaurantContainer from "../components/restaurant/restaurant-container.jsx";
import { useParams } from "react-router";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  return <RestaurantContainer id={restaurantId} />;
};
