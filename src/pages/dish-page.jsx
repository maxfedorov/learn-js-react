import { useParams } from "react-router";
import DishCounter from "../components/dish-counter/dish-counter.jsx";
import { use } from "react";
import { AuthContext } from "../components/auth-context/index.js";
import { useGetDishByIdQuery } from "../redux/servcies/api/api.js";

export const DishPage = () => {
  const { dishId } = useParams();
  const { data, isLoading, isError } = useGetDishByIdQuery(dishId);
  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }
  const { auth } = use(AuthContext);

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>Ingredients</h2>
      <ul>
        {data.ingredients &&
          data.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
      </ul>
      <div>Price: {data.price}</div>

      {auth.userName && <DishCounter dishId={dishId} />}
    </div>
  );
};
