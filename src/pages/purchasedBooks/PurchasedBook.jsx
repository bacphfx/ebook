import React, { useEffect, useState } from "react";
import Nav from "../../components/browse/Nav";
import { useDispatch, useSelector } from "react-redux";
import BookItem from "../../components/browse/BookItem";
import useModal from "../../utils/useModal";
import BookInfo from "../../components/browse/BookInfo";
import "./purchasedBook.css";
import { fetchPurchasedBooks } from "../../redux/action/actionBook";

const PurchasedBook = () => {
  const dispatch = useDispatch();
  const purchasedBooks = useSelector((state) => state.purchasedBooks.books);
  const [selectedBook, setSelectedBook] = useState(null);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    dispatch(fetchPurchasedBooks());
  }, [dispatch]);

  const handleClick = (book) => {
    toggle();
    setSelectedBook(book);
  };

  return (
    <div>
      <Nav />
      <div className="purchased-books-container">
        <h1>Sách đã mua</h1>
        <div className="purchased-books-list">
          {purchasedBooks.map((book) => (
            <BookItem book={book?.book} click={handleClick} key={book?.id} />
          ))}
          <BookInfo
            isShowing={isShowing}
            hide={toggle}
            data={selectedBook}
            purchasedBooks={purchasedBooks}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchasedBook;
