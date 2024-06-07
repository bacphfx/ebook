import React from "react";
import "./BookItem.css";

const BookItem = ({ book, click }) => {
  return (
    <div className="book">
      <img
        onClick={() => click(book)}
        className="row_poster"
        src={book.image}
        alt={book.name}
      />
      <h4>{book.title}</h4>
    </div>
  );
};

export default BookItem;
