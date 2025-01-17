import { createRoot } from "react-dom/client";
import { restaurants } from "./mock.js";

createRoot(document.getElementById("root")).render(
  <div>
    {restaurants.map((restaurant) => (
      <div>
        <h2>{restaurant.name}</h2>
        <h3>Меню</h3>
        <ul>
          {restaurant.menu.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>,
);
