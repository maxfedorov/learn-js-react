import { useForm } from "./use-form.js";
import Counter from "../counter/counter.jsx";

const ReviewForm = () => {
  const { form, setName, setText, clear, increment, decrement } = useForm();

  return (
    <>
      <h3>Review Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <span>Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <span>Text</span>
          <input
            type="text"
            value={form.text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <Counter
          value={form.rating}
          onDecrement={decrement}
          onIncrement={increment}
        />
        <button onClick={clear}>Clear</button>
      </form>
    </>
  );
};

export default ReviewForm;
