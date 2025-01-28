import Menu from "../menu/menu.jsx";
import Reviews from "../reviews/reviews.jsx";

const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Restaurant;
