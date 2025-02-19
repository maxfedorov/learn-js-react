export const CartItem = ({ amount, dishName }) => {
  return (
    <span>
      {dishName}: {amount}
    </span>
  );
};
