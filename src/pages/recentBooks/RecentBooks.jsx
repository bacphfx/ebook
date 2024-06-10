// RecentBooks.jsx
import React, { useEffect, useState } from "react";
import { getRecentBooks } from "../../utils/localStorage";
import Nav from "../../components/browse/Nav";
import "./recentBooks.css";
import { Link } from "react-router-dom";

const RecentBooks = () => {
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    const books = getRecentBooks();
    setRecentBooks(books);
  }, []);

  return (
    <div>
      <Nav />
      <div className="recent-container">
        <h2>Sách đã đọc gần đây</h2>
        <ul>
          {recentBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`} className="link-style recent-title">
                {book.title}
              </Link>
              <p>
                <i>Đọc vào ngày: {book.lastRead}</i>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentBooks;
