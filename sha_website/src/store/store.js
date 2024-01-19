import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  services: false,
  home: false,
  about: false,
  terms: false,
  contact: false,
  privacy: false,
  legal: false,
  careers: false,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setCached(state, action) {
      state[action.payload] = true;
    },
  },
});

const store = configureStore({
  reducer: {
    pages: pagesSlice.reducer,
  },
});
export const pagesActions = pagesSlice.actions;
export default store;
