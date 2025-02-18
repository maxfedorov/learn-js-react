import Counter from "../counter/counter.jsx";
import { useCount } from "./use-counter.js";

const DishCounter = ({ dishId }) => {
  const { amount, increment, decrement } = useCount(dishId);

  return (
    <Counter value={amount} onDecrement={decrement} onIncrement={increment} />
  );
};

export default DishCounter;
