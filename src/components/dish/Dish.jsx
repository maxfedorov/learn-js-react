import Counter from "../counter/Counter.jsx";

const Dish = ({ title }) => {
  return (
    <>
      {title}
      <Counter />
    </>
  );
};

export default Dish;
