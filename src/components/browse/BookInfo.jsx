// Modal.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./bookInfo.css";
import { Close, MenuBook } from "@mui/icons-material";
const base_url = "https://image.tmdb.org/t/p/original";

const BookInfo = ({ isShowing, hide, data }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" onClick={hide} />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <Close className="close" onClick={hide} />
              <div className="modal-header">
                <img src={data.image} alt={data?.name} />
              </div>
              <div className="info">
                <h1>{data?.title}</h1>
                <h3>{data?.author}</h3>
                <div className="price">
                  <h3>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(data.price)}
                  </h3>
                  <button className="read-button">
                    <MenuBook style={{ color: "white" }} />
                    <span>Đọc sách</span>
                  </button>
                </div>
                <p>{truncate(data.description, 800)}</p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default BookInfo;
