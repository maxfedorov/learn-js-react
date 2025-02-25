import styles from "./restaurant.module.css";
import { Outlet } from "react-router";
import { RestaurantLink } from "../restaurant-link/restaurant-link.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import { use } from "react";
import { AuthContext } from "../auth-context/index.js";

const Restaurant = ({ name, addReview, addReviewLoading }) => {
  const { auth } = use(AuthContext);

  return (
    <div className={styles.restaurant}>
      <h2 className={styles.heading}>{name}</h2>
      <RestaurantLink to={`menu`}>Menu</RestaurantLink>
      <RestaurantLink to={`reviews`}>Reviews</RestaurantLink>
      <Outlet />
      {auth.userName && (
        <ReviewForm onSubmit={addReview} disableSubmit={addReviewLoading} />
      )}
    </div>
  );
};

export default Restaurant;
