// src/pages/BooksPage.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, selectBooks } from "../redux/bookslice";

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  useEffect(() => {
    const fetchedBooks = []; // Replace with your API call or data
    dispatch(setBooks(fetchedBooks));
  }, [dispatch]);

  return (
    <div>
      <h2>Books</h2>
      {/* Render your books using the 'books' state */}
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};

export default BooksPage;
