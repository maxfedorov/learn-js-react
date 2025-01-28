const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => <li key={review.id}>{review.text}</li>)
        ) : (
          <span>No reviews</span>
        )}
      </ul>
    </>
  );
};

export default Reviews;
