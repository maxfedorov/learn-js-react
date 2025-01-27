import Counter from "../counter/Counter.jsx";

const Dish = ({ item }) => {
  return (
    <div>
      <li>
        {item.name}
        <Counter />
      </li>
    </div>
  );
};

export default Dish;
