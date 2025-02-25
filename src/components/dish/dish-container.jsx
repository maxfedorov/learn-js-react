import Dish from "./dish.jsx";

const DishContainer = ({ dishName, dishId }) => {
  return <Dish title={dishName} dishId={dishId} />;
};

export default DishContainer;
