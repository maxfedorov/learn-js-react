import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getRestaurantReviewsById: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getRestaurantDishesById: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    addReview: builder.mutation({
      query: (restaurantId, review) => ({
        url: `/reviews/${restaurantId}`,
        body: review,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetRestaurantReviewsByIdQuery,
  useGetDishByIdQuery,
  useGetRestaurantDishesByIdQuery,
  useAddReviewMutation,
} = apiSlice;
