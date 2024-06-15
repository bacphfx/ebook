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
      <div className="book-title">{book.title}</div>
    </div>
  );
};

export default BookItem;
