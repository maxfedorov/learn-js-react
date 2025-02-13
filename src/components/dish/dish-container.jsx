import { useSelector } from "react-redux";
import Dish from "./dish.jsx";
import { selectDishById } from "../../redux/entities/dishes/slice.js";

const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  const { name } = dish || {};

  return <Dish title={name} />;
};

export default DishContainer;
