// components/Books/BookForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/actions/books";

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleAddBook = () => {
    // Dispatch an action to add the new book to the Redux store
    dispatch(addBook({ title, author }));

    // Reset the form
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h3>Add New Book</h3>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
