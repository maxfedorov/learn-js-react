const Counter = ({ value = 0, onDecrement, onIncrement }) => {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      {value}
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
