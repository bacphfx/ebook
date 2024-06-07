import React, { useEffect, useState } from "react";
import PDFViewer from "../../components/pdf/PDFViewer";
import { useParams, useNavigate } from "react-router-dom"; // Sử dụng useNavigate thay vì useHistory
import BookAPI from "../../components/api/bookAPI";
import { ArrowBackIos } from "@mui/icons-material";
import "./bookReader.css";

const BookReader = () => {
  const token = localStorage.getItem("token");
  const { bookId } = useParams();
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBookDetail = async () => {
      if (!bookId || !token) {
        setError("Missing book ID or token");
        setLoading(false);
        return;
      }
      try {
        const res = await BookAPI.getBookDetail(bookId, token);
        setBook(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setError("Failed to fetch book details");
        setLoading(false);
      }
    };
    getBookDetail();
  }, [bookId, token]);

  const handleBackClick = () => {
    navigate(-1); // Quay lại trang trước đó
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="header">
        <ArrowBackIos onClick={handleBackClick} className="left-element" />
        <p className="center-element">{book?.title}</p>
      </div>

      {book?.file ? (
        <PDFViewer url={book.file} />
      ) : (
        <div>No PDF file available</div>
      )}
    </div>
  );
};

export default BookReader;
