import "./reset.css";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";
import { AuthContextProvider } from "../auth-context/auth-context.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page.jsx";
import Restaurants from "../restaurants/restaurants.jsx";
import Layout from "../layout/layout.jsx";
import { RestaurantPage } from "../../pages/restaurant-page.jsx";
import Menu from "../menu/menu.jsx";
import Reviews from "../reviews/reviews.jsx";
import { DishPage } from "../../pages/dish-page.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Routes>
              <Route index element={<HomePage />} />
              <Route element={<Layout />}>
                <Route path="/restaurants" element={<Restaurants />}>
                  <Route index element={<div>Choose restaurant</div>} />
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="reviews" element={<Reviews />} />
                  </Route>
                </Route>
                <Route path="/dish/:dishId" element={<DishPage />} />
              </Route>
            </Routes>
          </ThemeContextProvider>
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
