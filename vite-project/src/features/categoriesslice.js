// src/features/categoriesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories.list;
export default categoriesSlice.reducer;
