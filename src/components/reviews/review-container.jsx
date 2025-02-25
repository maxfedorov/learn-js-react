import { useSelector } from "react-redux";
import styles from "./reviews.module.css";
import { selectUserById } from "../../redux/entities/users/slice.js";

const ReviewContainer = ({ rating, text, userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  return (
    <>
      <div className={styles.review}>
        <span style={{ fontWeight: "bold" }}>{user?.name || "Loading..."}</span>
        <p>{text}</p>
        <span>rating: {rating}</span>
      </div>
    </>
  );
};

export default ReviewContainer;
