import { useForm } from "./use-form.js";
import Counter from "../counter/counter.jsx";
import styles from "./review-form.module.css";
import Button from "../button/button.jsx";

const ReviewForm = ({ onSubmit, disableSubmit }) => {
  const { form, setName, setText, clear, increment, decrement } = useForm();
  const { text, rating } = form;
  return (
    <div className={styles.form}>
      <h3>Review Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.group}>
          <span>Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => setName(event.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.group}>
          <span>Text</span>
          <input
            type="text"
            value={form.text}
            onChange={(event) => setText(event.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.counter}>
          <span>Rating</span>
          <Counter
            value={form.rating}
            onDecrement={decrement}
            onIncrement={increment}
          />
        </div>
        <Button onClick={clear} className={styles.button} size={"L"}>
          Clear
        </Button>
        <Button
          onClick={() => onSubmit({ text, rating })}
          className={styles.button}
          size={"L"}
          disabled={disableSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
