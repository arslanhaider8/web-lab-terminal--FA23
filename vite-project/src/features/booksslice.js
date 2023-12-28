// src/features/booksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;
export const selectBooks = (state) => state.books.list;
export default booksSlice.reducer;
