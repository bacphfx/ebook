// Modal.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./bookInfo.css";
import { Close, MenuBook } from "@mui/icons-material";
const base_url = "https://image.tmdb.org/t/p/original";

const BookInfo = ({ isShowing, hide, data }) => {
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
                <img src={`${base_url}${data?.poster_path}`} alt={data?.name} />
              </div>
              <div className="info">
                <h1>{data?.title ? data.title : data?.name}</h1>
                <h3>{data?.media_type}</h3>
                <div className="price">
                  <h3>100.000đ</h3>
                  <button className="read-button">
                    <MenuBook style={{ color: "white" }} />
                    <span>Đọc sách</span>
                  </button>
                </div>
                <p>{data?.overview}</p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default BookInfo;
