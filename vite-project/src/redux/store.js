// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducer";
import categoriesReducer from "./reducer";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    // Add other reducers here
  },
});
