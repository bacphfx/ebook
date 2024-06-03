// Modal.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
const base_url = "https://image.tmdb.org/t/p/original";

const Modal = ({ isShowing, hide, data }) => {
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
              <div className="modal-header">
                <img src={`${base_url}${data?.poster_path}`} alt={data?.name} />
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
