import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice.js";
import styles from "./reviews.module.css";
import { selectUserById } from "../../redux/entities/users/slice.js";
import ReviewForm from "../review-form/review-form.jsx";
import { use } from "react";
import { AuthContext } from "../auth-context/index.js";

const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  const { userId, text, rating } = review || {};

  const user = useSelector((state) => selectUserById(state, userId));
  const { auth } = use(AuthContext);

  return (
    <>
      <div className={styles.review}>
        <span style={{ fontWeight: "bold" }}>{user.name}</span>
        <p>{text}</p>
        <span>rating: {rating}</span>
      </div>
      {auth.userName && <ReviewForm />}{" "}
    </>
  );
};

export default ReviewContainer;
