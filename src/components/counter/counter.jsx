import styles from "./counter.module.css";

const Counter = ({ value = 0, onDecrement, onIncrement }) => {
  return (
    <div className={styles.counter}>
      <button onClick={onDecrement}>-</button>
      {value}
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
