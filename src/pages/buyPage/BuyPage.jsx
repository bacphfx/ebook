import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QRCodeComponent from "./QRCodeComponent";
import "./BuyPage.css";
import Nav from "../../components/browse/Nav";
import { useSelector } from "react-redux";
import ImageUpload from "../../components/checkout/ImageUpload";

const BuyPage = () => {
  const location = useLocation();
  const data = location.state?.data;
  const auth = useSelector((state) => state.auth);
  const user = JSON.parse(auth.user);

  const [type, setType] = useState("");

  useEffect(() => {
    if (data?.author) {
      setType("B");
    } else {
      setType("S");
    }
  }, [data]);

  // Thông tin tài khoản nhận tiền
  const accountName = "Phạm Hồ Bắc";
  const accountNumber = "2111223344";
  const bank = "Techcombank";
  const bankCode = "TCB"; // Techcombank
  const amount = data?.price;
  const timestamp = Date.now();
  const fixedMessage = `${type}-${data?.id}-${user?.id}`;
  const message = type === "B" ? fixedMessage : `${fixedMessage}-${timestamp}`;

  const jsonData = { id: data?.id, code: message, type: type };

  return (
    <>
      <Nav />
      <div className="buy-page-container">
        <div className="buy-page-banner"></div>
        <h1>Thanh toán</h1>
        <div className="buy-page-content">
          <div className="book-info">
            <div className="book-info-detail">
              <h2>Thông tin sản phẩm</h2>
              <h3>Tên: {data?.title}</h3>
              <h3>
                Giá:{" "}
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(data?.price)}
              </h3>
            </div>
          </div>
          <div className="account-info">
            <div className="account-info-detail">
              <h2>Thông tin chuyển khoản</h2>
              <p>
                Chủ tài khoản: <b>{accountName}</b>
              </p>
              <p>
                Số tài khoản: <b>{accountNumber}</b>
              </p>
              <p>
                Ngân hàng: <b>{bank}</b>
              </p>
              <p>
                Nội dung chuyển khoản:
                <br /> <b>{message}</b>
              </p>
            </div>
            <QRCodeComponent
              accountNumber={accountNumber}
              bankCode={bankCode}
              amount={amount}
              message={message}
            />
          </div>
        </div>
        <div className="image-upload">
          <ImageUpload jsonData={jsonData} />
        </div>
      </div>
    </>
  );
};

export default BuyPage;
