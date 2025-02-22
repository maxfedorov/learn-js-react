import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "./slice.js";

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`,
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no restaurant found");
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectRestaurantIds(getState(), restaurantId);
    },
  },
);
