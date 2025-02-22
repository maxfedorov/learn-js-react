import { useSelector } from "react-redux";
import Dish from "./dish.jsx";
import { selectDishById } from "../../redux/entities/dishes/slice.js";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id.js";
import { useRequest } from "../../redux/entities/hooks/use-request.js";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants.jsx";

const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  const { name } = dish || {};

  const requestStatus = useRequest(getDishById, dishId);

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return "loading...";
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "error...";
  }
  return <Dish title={name} dishId={dishId} />;
};

export default DishContainer;
