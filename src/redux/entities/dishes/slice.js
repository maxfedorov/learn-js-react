import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes.js";
import { getDishById } from "./get-dish-by-id.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

const selectDishesSlice = (state) => state.dishes;

export const { selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishesSlice);
