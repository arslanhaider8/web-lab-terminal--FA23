// BookItem.js
import React from "react";

const BookItem = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {/* Render other book details as needed */}
    </div>
  );
};

export default BookItem;
