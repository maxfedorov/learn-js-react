import DishCounter from "../dish-counter/dish-counter.jsx";

const Dish = ({ title }) => {
  return (
    <>
      {title}
      <DishCounter />
    </>
  );
};

export default Dish;
