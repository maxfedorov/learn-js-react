import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock.js";

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((entities, dish) => {
    entities[dish.id] = dish;
    return entities;
  }, {}),
};

export const dishesSlice = createSlice({
  name: "Dishes",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishById } = dishesSlice.selectors;
