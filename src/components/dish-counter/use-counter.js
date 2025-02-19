import { useCallback } from "react";
import {
  addToCart,
  removeFromCart,
  selectAmountByItemId,
} from "../../redux/entities/cart/slice.js";
import { useDispatch, useSelector } from "react-redux";

export const useCount = (dishId) => {
  const dispatch = useDispatch();

  const amount = useSelector(
    (state) => selectAmountByItemId(state, dishId) || 0,
  );

  const increment = useCallback(
    () => dispatch(addToCart(dishId)),
    [dishId, dispatch],
  );

  const decrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dishId, dispatch],
  );

  return {
    amount,
    increment,
    decrement,
  };
};
