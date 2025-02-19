import styles from "./reviews.module.css";
import ReviewContainer from "./review-container.jsx";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";

const Reviews = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { reviews } = restaurant || {};

  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      <ul className={styles.reviewItems}>
        {reviews.length > 0 ? (
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
