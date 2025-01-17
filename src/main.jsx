import { createRoot } from "react-dom/client";
import { restaurants } from "./mock.js";

createRoot(document.getElementById("root")).render(
  <div>
    {restaurants.map((restaurant) => (
      <div key={restaurant.id}>
        <h2>{restaurant.name}</h2>
        <h3>Меню</h3>
        <ul>
          {restaurant.menu.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>,
);
