import styles from "./reviews.module.css";
import ReviewContainer from "./review-container.jsx";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants.jsx";
import { useRequest } from "../../redux/entities/hooks/use-request.js";
import { getUsers } from "../../redux/entities/users/get-users.js";
import { getReviews } from "../../redux/entities/reviews/get-reviews.js";

const Reviews = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { reviews } = restaurant || {};

  const reviewsRequestStatus = useRequest(getReviews, restaurantId);
  const usersRequestStatus = useRequest(getUsers, restaurantId);

  if (
    reviewsRequestStatus === REQUEST_STATUS_PENDING ||
    usersRequestStatus === REQUEST_STATUS_PENDING
  ) {
    return "loading...";
  }

  if (
    reviewsRequestStatus === REQUEST_STATUS_REJECTED ||
    usersRequestStatus === REQUEST_STATUS_REJECTED
  ) {
    return "error...";
  }

  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      <ul className={styles.reviewItems}>
        {reviews?.length > 0 ? (
          reviews.map((id) => (
            <li key={id}>
              <ReviewContainer reviewId={id} />
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
