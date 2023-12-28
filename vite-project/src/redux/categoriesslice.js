// redux/slices/categoriesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    getStatus: (state) => {
      // This action sets the status to "Under Construction"
      state.status = "Under Construction";
    },
  },
});

export const { addCategory, setCategories, getStatus } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
