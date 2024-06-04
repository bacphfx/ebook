import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Logout, NotificationsNone, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.isAuthenticated;
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 50) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <div className="fixed">
          <div className="right_nav">
            <Link to="/" className="nav-title">
              <p>Book Store</p>
            </Link>
            <Link className="nav-title" to="/categories">
              Sách điện tử
            </Link>
            <Link className="nav-title" to="/">
              Sản phẩm bán chạy
            </Link>
            <Link className="nav-title" to="/">
              Tin tức
            </Link>
            <Link className="nav-title" to="/">
              Khuyến mại
            </Link>
          </div>
          <div className="left_nav">
            <div className="search">
              <Link to="/search">
                <Search style={{ color: "white" }} fontSize="large" />
              </Link>
            </div>

            <button className="button button_1">
              <Link to="/" className="yellow">
                Gói cước
              </Link>
            </button>
            {!isAuth ? (
              <>
                <button className="button button_2">
                  <Link to="/register" className="white">
                    Đăng ký
                  </Link>
                </button>
                <button className="button button_3">
                  <Link to="/login" className="white">
                    Đăng nhập
                  </Link>
                </button>
              </>
            ) : (
              <>
                <div className="notification">
                  <NotificationsNone fontSize="large" />
                </div>
                <div className="username"></div>
                <div className="logout" onClick={handleLogout}>
                  <Logout fontSize="large" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
