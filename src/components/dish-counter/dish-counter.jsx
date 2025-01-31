import Counter from "../counter/counter.jsx";
import { useCount } from "./use-counter.js";

const DishCounter = () => {
  const { value, increment, decrement } = useCount();
  return (
    <Counter value={value} onDecrement={decrement} onIncrement={increment} />
  );
};

export default DishCounter;
