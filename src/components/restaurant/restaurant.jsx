import styles from "./restaurant.module.css";
import Menu from "../menu/menu.jsx";
import Reviews from "../reviews/reviews.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import { AuthContext } from "../auth-context/index.js";
import { use } from "react";

const Restaurant = ({ name, dishesIds, reviewsIds }) => {
  const { auth } = use(AuthContext);

  return (
    <div className={styles.restaurant}>
      <h2 className={styles.heading}>{name}</h2>
      <Menu dishesIds={dishesIds} />
      <Reviews reviewsIds={reviewsIds} />
      {auth.userName && <ReviewForm />}
    </div>
  );
};

export default Restaurant;
