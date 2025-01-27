import Menu from "../menu/Menu.jsx";
import Reviews from "../reviews/Reviews.jsx";

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
