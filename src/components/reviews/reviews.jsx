import styles from "./reviews.module.css";
import ReviewContainer from "./review-container.jsx";

const Reviews = ({ reviewsIds }) => {
  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      <ul className={styles.reviewItems}>
        {reviewsIds.length > 0 ? (
          reviewsIds.map((id) => (
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
