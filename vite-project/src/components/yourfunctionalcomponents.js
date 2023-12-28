import { useSelector } from "react-redux";
import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook } from "../redux/slices/books"; // Import your Redux actions

const YourFunctionalComponent = () => {
  const someStateVariable = useSelector(
    (state) => state.someReducer.someStateVariable
  );

  const handleAddBook = () => {
    dispatch(addBook({ title: "New Book", author: "New Author" }));
  };

  return (
    <div>
      <p>{someStateVariable}</p>
    </div>
  );

  const dispatch = useDispatch();

  const handleSomeAction = () => {
    dispatch(someAction(/* payload */)); // Dispatch your action with optional payload
  };
  return (
    <div>
      <button onClick={handleSomeAction}>Dispatch Action</button>
    </div>
  );

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  return <div>{/* Your component content here */}</div>;
};

export default YourFunctionalComponent;
