import React from "react";
import { useLocation } from "react-router-dom";
import QRCodeComponent from "./QRCodeComponent"; // Import component QRCodeComponent
import "./BuyPage.css";
import BookItem from "../../components/browse/BookItem";
import Nav from "../../components/browse/Nav";

const BuyPage = () => {
  const location = useLocation();
  const { bookData } = location.state;

  // Thông tin tài khoản nhận tiền
  const accountNumber = "2111223344";
  const bankCode = "TCB"; // Techcombank
  const amount = bookData?.price;
  const message = `Thanh toán sách ${bookData?.title}`;

  return (
    <>
      <Nav />
      <div className="buy-page-container">
        <h1>Mua Sách</h1>
        <div className="buy-page-content">
          <div className="book-info">
            <img src={bookData?.image} />
            <div className="book-info-detail">
              <h2>{bookData?.title}</h2>
              <h3>Tác giả: {bookData?.author}</h3>
              <h3>
                Giá:{" "}
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(bookData?.price)}
              </h3>
            </div>
          </div>
          <div className="account-info">
            <div className="account-info-detail">
              <h2>Thông tin tài khoản nhận tiền</h2>
              <p>Chủ tài khoản: Phạm Hồ Bắc</p>
              <p>Số tài khoản: {accountNumber}</p>
              <p>Ngân hàng: Techcombank</p>
              <p>Chi nhánh: Chi nhánh Hà Nội</p>
              <p>Ghi chú: Vui lòng ghi rõ mã sách khi chuyển khoản</p>
            </div>
            <QRCodeComponent
              accountNumber={accountNumber}
              bankCode={bankCode}
              amount={amount}
              message={message}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
