import Restaurant from "./restaurant.jsx";
import {
  useAddReviewMutation,
  useGetRestaurantsQuery,
} from "../../redux/servcies/api/api.js";
import { use, useCallback } from "react";
import { AuthContext } from "../auth-context/index.js";

const RestaurantContainer = ({ restaurantId }) => {
  const { auth } = use(AuthContext);

  const { data, isFetching, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === restaurantId),
    }),
  });

  const [addReview, { isLoading }] = useAddReviewMutation();
  const handleAddReview = useCallback(
    (review) => {
      addReview({
        restaurantId,
        review: {
          ...review,
          userId: auth.userId,
        },
      });
    },
    [addReview, restaurantId, auth.userId],
  );

  if (isFetching) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }
  const { name } = data || {};

  return (
    <Restaurant
      name={name}
      addReview={handleAddReview}
      addReviewLoading={isLoading}
    />
  );
};

export default RestaurantContainer;
