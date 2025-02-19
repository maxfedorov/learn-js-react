import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dishes/slice.js";
import DishCounter from "../components/dish-counter/dish-counter.jsx";
import { use } from "react";
import { AuthContext } from "../components/auth-context/index.js";

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  const { name, price, ingredients } = dish || {};
  const { auth } = use(AuthContext);

  return (
    <div>
      <h1>{name}</h1>
      <h2>Ingredients</h2>
      <ul>
        {ingredients &&
          ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
      </ul>
      <div>Price: {price}</div>

      {auth.userName && <DishCounter dishId={dishId} />}
    </div>
  );
};
