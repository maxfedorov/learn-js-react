import Restaurant from "./restaurant.jsx";
import { useGetRestaurantsQuery } from "../../redux/servcies/api/api.js";

const RestaurantContainer = ({ restaurantId }) => {
  const { data, isFetching, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === restaurantId),
    }),
  });

  if (isFetching) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }
  const { name, menu, reviews } = data || {};

  return <Restaurant name={name} dishesIds={menu} reviewsIds={reviews} />;
};

export default RestaurantContainer;
