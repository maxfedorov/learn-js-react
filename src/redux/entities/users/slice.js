import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock.js";

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((entities, user) => {
    entities[user.id] = user;
    return entities;
  }, {}),
};

export const usersSlice = createSlice({
  name: "Users",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById } = usersSlice.selectors;
