import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (id, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();
    if (!result.length) {
      rejectWithValue("No restaurants found.");
      return;
    }
    return result;
  },
  {},
);
