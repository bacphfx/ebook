import React, { useState, useEffect, useCallback } from "react";
import "./bookList.css";
import useModal from "../../utils/useModal";
import BookInfo from "./BookInfo";
import BookAPI from "../api/bookAPI";
import { debounce } from "lodash";
import BookItem from "./BookItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchasedBooks } from "../../redux/action/actionBook";

function BookList({ title, data, limit }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const { isShowing, toggle } = useModal();

  const fetchBooks = useCallback(
    debounce(async (category) => {
      try {
        const request = await BookAPI.getBooksByCategory(category, limit);
        setBooks(request.data.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    }, 300), // Adjust the debounce time as needed
    []
  );

  useEffect(() => {
    fetchBooks(data);
  }, [data, fetchBooks]);

  const dispatch = useDispatch();
  const purchasedBooks = useSelector((state) => state.purchasedBooks.books);

  useEffect(() => {
    dispatch(fetchPurchasedBooks());
  }, [dispatch]);

  const handleClick = (book) => {
    toggle();
    setSelectedBook(book);
  };

  if (books.length === 0) return null;
  return (
    <div className="row">
      <h2 className="movie-list-title">{title}</h2>
      <div className="row_posters sc2">
        {books.map((book) => {
          return <BookItem book={book} click={handleClick} key={book.id} />;
        })}
      </div>
      <BookInfo
        isShowing={isShowing}
        hide={toggle}
        data={selectedBook}
        purchasedBooks={purchasedBooks}
      />
    </div>
  );
}

export default BookList;
