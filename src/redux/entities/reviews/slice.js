import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock.js";

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((entities, review) => {
    entities[review.id] = review;
    return entities;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: "Reviews",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewById } = reviewsSlice.selectors;
