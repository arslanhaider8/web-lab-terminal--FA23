// redux/reducers/index.js
import { combineReducers } from "redux";
import booksReducer from "./books";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  // Add other slices if needed
});

export default rootReducer;
