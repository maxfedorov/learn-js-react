import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice.js";
import styles from "./reviews.module.css";
import { selectUserById } from "../../redux/entities/users/slice.js";

const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  const { userId, text, rating } = review || {};

  const user = useSelector((state) => selectUserById(state, userId));

  return (
    <div className={styles.review}>
      <span style={{ fontWeight: "bold" }}>{user.name}</span>
      <p>{text}</p>
      <span>rating: {rating}</span>
    </div>
  );
};

export default ReviewContainer;
