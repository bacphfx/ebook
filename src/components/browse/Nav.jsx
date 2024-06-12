import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Logout, NotificationsNone, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import UserInfomation from "./UserInfomation";

function Nav() {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.isAuthenticated;
  const user = JSON.parse(auth.user);
  const [show, handleShow] = useState(false);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isUserDropdownShow, setIsUserDropdownShow] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      handleShow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("recentBooks");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const toggle = () => {
    setIsMenuShow(!isMenuShow);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className={`nav ${show && "nav_black"}`}>
        <div className="fixed">
          <div className="right_nav">
            <Link to="/" className="nav-title">
              <p>Ebook</p>
            </Link>
            <Link className="nav-title" onClick={toggle}>
              Sách điện tử
            </Link>
            <Link
              className="nav-title"
              to="/"
              onClick={() => setIsMenuShow(false)}
            >
              Sản phẩm bán chạy
            </Link>
            <Link
              className="nav-title"
              to="/posts"
              onClick={() => setIsMenuShow(false)}
            >
              Tin tức
            </Link>
            <Link
              className="nav-title"
              to="/"
              onClick={() => setIsMenuShow(false)}
            >
              Khuyến mại
            </Link>
          </div>
          <div className="left_nav">
            <div className="search">
              <Link to="/search" onClick={() => setIsMenuShow(false)}>
                <Search style={{ color: "white" }} fontSize="large" />
              </Link>
            </div>
            {user?.role === 2 || user?.isSubscribe === 1 ? null : (
              <button className="button button_1">
                <Link
                  to="/subscribed"
                  className="yellow"
                  onClick={() => setIsMenuShow(false)}
                >
                  Gói cước
                </Link>
              </button>
            )}
            {!isAuth ? (
              <>
                <button className="button button_2">
                  <Link
                    to="/register"
                    className="white"
                    onClick={() => setIsMenuShow(false)}
                  >
                    Đăng ký
                  </Link>
                </button>
                <button className="button button_3">
                  <Link
                    to="/login"
                    className="white"
                    onClick={() => setIsMenuShow(false)}
                  >
                    Đăng nhập
                  </Link>
                </button>
              </>
            ) : (
              <>
                <div className="notification">
                  <NotificationsNone fontSize="large" />
                </div>
                <div
                  className="username"
                  onClick={() => {
                    setIsUserDropdownShow(!isUserDropdownShow);
                  }}
                ></div>
                <div className="logout" onClick={handleLogout}>
                  <Logout fontSize="large" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {isMenuShow && <Menu hide={toggle} />}
      {isUserDropdownShow && <UserInfomation />}
    </div>
  );
}

export default Nav;
