import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock.js";

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((entities, restaurant) => {
    entities[restaurant.id] = restaurant;
    return entities;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantsSlice.selectors;
