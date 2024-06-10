import React, { useState, useEffect } from "react";

import MovieDetail from "../browse/MovieDetail";
import BookItem from "../browse/BookItem";
import "./SearchResult.css";
import BookAPI from "../api/bookAPI";
import useModal from "../../utils/useModal";
import BookInfo from "../browse/BookInfo";
import { useSelector } from "react-redux";

const SearchResult = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const { isShowing, toggle } = useModal();

  const purchasedBooks = useSelector((state) => state.purchasedBooks.books);

  const handleClick = (movie) => {
    toggle();
    selectedBook(movie);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await BookAPI.getBooksByName(query);
      setBooks(res.data.data);
      return res;
    }

    if (query) {
      fetchData();
    } else {
      setBooks([]);
    }
  }, [query]);

  return (
    <div className="row">
      <h2>Search Result</h2>
      <div className="row_posters search-resul-container sc2">
        {books.map((book) => (
          <BookItem book={book} click={handleClick} key={book.id} />
        ))}
      </div>
      <BookInfo
        isShowing={isShowing}
        hide={toggle}
        data={selectedBook}
        purchasedBooks={purchasedBooks}
      />
    </div>
  );
};

export default SearchResult;
