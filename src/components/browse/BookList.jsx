import React, { useState, useEffect, useCallback } from "react";
import "./bookList.css";
import useModal from "../../utils/useModal";
import BookInfo from "./BookInfo";
import BookAPI from "../api/bookAPI";
import { debounce } from "lodash";
import BookItem from "./BookItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchasedBooks } from "../../redux/action/actionBook";
import Pagination from "./Pagination";

function BookList({ title, data, limit, type }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { isShowing, toggle } = useModal();

  const fetchBooks = useCallback(
    debounce(async (category) => {
      try {
        const res = await BookAPI.getBooksByCategory(
          category,
          limit,
          currentPage
        );
        setBooks(res.data.data);
        setTotalPages(Math.ceil(res.data.total / res.data.per_page));
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    }, 300), // Adjust the debounce time as needed
    [currentPage]
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

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
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
      {type === "category" && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
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
