import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onPlus = () => setCount(count + 1);
  const onMinus = () => setCount(count - 1);
  return (
    <div>
      {count > 0 && <button onClick={onMinus}>-</button>}
      {count}
      {count < 5 && <button onClick={onPlus}>+</button>}
    </div>
  );
};

export default Counter;
