import styles from "./reviews.module.css";
import ReviewContainer from "./review-container.jsx";
import { useParams } from "react-router";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants.jsx";
import { useRequest } from "../../redux/entities/hooks/use-request.js";
import { getUsers } from "../../redux/entities/users/get-users.js";
import { useGetRestaurantReviewsByIdQuery } from "../../redux/servcies/api/api.js";

const Reviews = () => {
  const { restaurantId } = useParams();

  const usersRequestStatus = useRequest(getUsers, restaurantId);
  const {
    data: reviwesData,
    isFetching: reviewsisFetching,
    isError: reviewsIsError,
  } = useGetRestaurantReviewsByIdQuery(restaurantId);
  if (reviewsisFetching || usersRequestStatus === REQUEST_STATUS_PENDING) {
    return "loading...";
  }

  if (reviewsIsError || usersRequestStatus === REQUEST_STATUS_REJECTED) {
    return "error...";
  }

  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      <ul className={styles.reviewItems}>
        {reviwesData?.length > 0 ? (
          reviwesData.map(({ id, text, rating, userId }) => (
            <li key={id}>
              <ReviewContainer text={text} rating={rating} userId={userId} />
            </li>
          ))
        ) : (
          <span>No reviews</span>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
