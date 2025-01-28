import Counter from "../counter/counter.jsx";

const Dish = ({ title }) => {
  return (
    <>
      {title}
      <Counter />
    </>
  );
};

export default Dish;
