import { useSelector } from "react-redux";
import { selectCartItemsIds } from "../../redux/entities/cart/slice.js";
import { Cart } from "./cart.jsx";

export const CartContainer = () => {
  const itemsIds = useSelector(selectCartItemsIds);

  if (!itemsIds.length) {
    return null;
  }

  return <Cart itemsIds={itemsIds} />;
};
