// src/pages/BooksPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, selectBooks } from "../features/booksSlice";

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  useEffect(() => {
    // Fetch books data and dispatch the action
    const fetchedBooks = [
      { id: 1, title: "Book 1", author: "Author 1" },
      { id: 2, title: "Book 2", author: "Author 2" },
      { id: 3, title: "Book 3", author: "Author 3" },
    ];
    dispatch(setBooks(fetchedBooks));
  }, [dispatch]);

  const handleDelete = (id) => {
    // Dispatch an action to delete the book with the specified id
    // Update the state in the reducer accordingly
    // You can add a 'deleteBook' action in the booksSlice.js
    // For simplicity, let's assume you have such an action already
    // dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>Books</h2>
      {/* Render your books using the 'books' state */}
      {books.map((book) => (
        <div key={book.id}>
          <p>
            <strong>Title:</strong> {book.title}
          </p>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BooksPage;
