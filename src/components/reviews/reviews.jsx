import styles from "./reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      <ul className={styles.reviewItems}>
        {reviews.length > 0 ? (
          reviews.map((review) => <li key={review.id}>{review.text}</li>)
        ) : (
          <span>No reviews</span>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
