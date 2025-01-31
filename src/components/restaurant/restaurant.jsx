import styles from "./restaurant.module.css";
import Menu from "../menu/menu.jsx";
import Reviews from "../reviews/reviews.jsx";
import ReviewForm from "../review-form/review-form.jsx";

const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div className={styles.restaurant}>
      <h2 className={styles.heading}>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <ReviewForm />
    </div>
  );
};

export default Restaurant;
