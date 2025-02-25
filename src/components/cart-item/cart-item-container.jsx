import { useSelector } from "react-redux";
import { selectAmountByItemId } from "../../redux/entities/cart/slice.js";
import { CartItem } from "./cart-item";
import { useGetDishByIdQuery } from "../../redux/servcies/api/api.js";

export const CartItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const { data, isLoading, isError } = useGetDishByIdQuery(id);
  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }

  return <CartItem amount={amount} dishName={data.name} />;
};
