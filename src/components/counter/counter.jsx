import styles from "./counter.module.css";

const Counter = ({ value = 0, onDecrement, onIncrement }) => {
  return (
    <div className={styles.counter}>
      <button onClick={onDecrement} className={styles.counterButton}>
        -
      </button>
      {value}
      <button onClick={onIncrement} className={styles.counterButton}>
        +
      </button>
    </div>
  );
};

export default Counter;
