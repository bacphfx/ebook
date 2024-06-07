// Modal.js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./bookInfo.css";
import { Close, MenuBook, ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookInfo = ({ isShowing, hide, data }) => {
  const auth = useSelector((state) => state.auth);
  const user = JSON.parse(auth.user);
  const [isSub, setIsSub] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsSub(false);
    } else if (user.role === 2 || user.is_subscribed === 1) {
      setIsSub(true);
    }
  }, [user]);
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
                <img src={data?.image} alt={data?.name} />
              </div>
              <div className="info">
                <h1>{data?.title}</h1>
                <h3>{data?.author}</h3>
                <div className="price">
                  <h3>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(data?.price)}
                  </h3>
                  {isSub ? (
                    <Link to={`/book/${data.id}`} className="link-style">
                      <button className="read-button">
                        <MenuBook style={{ color: "white" }} />
                        <span>Đọc sách</span>
                      </button>
                    </Link>
                  ) : (
                    <>
                      <button className="read-button">
                        <MenuBook style={{ color: "white" }} />
                        <span>Trở thành hội viên</span>
                      </button>
                      <button className="read-button">
                        <ShoppingCart style={{ color: "white" }} />
                        <span>Mua sách</span>
                      </button>
                    </>
                  )}
                </div>
                <p>{truncate(data?.description, 800)}</p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default BookInfo;
