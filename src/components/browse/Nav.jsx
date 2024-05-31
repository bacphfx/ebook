import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 50) {
          handleshow(true);
        } else handleshow(false);
      });
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="fixed">
        <div className="right_nav">
          <a href="/" className="nav-title">
            {/* <img
              className="nav_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
              alt="Netflix Logo"
            /> */}
            <p>Book Store</p>
          </a>
          <Link to="/">
            <span className="nav-title">Sách điện tử</span>
          </Link>
          <a className="nav-title" href="/">
            Sách nói
          </a>
          <a className="nav-title" href="/">
            Sách hiệu sổi
          </a>
          <a className="nav-title" href="/">
            Sách tóm tắt
          </a>
          <a className="nav-title" href="/">
            Podscast
          </a>
          <a className="nav-title" href="/">
            Combo
          </a>
          <a className="nav-title" href="/">
            Tuyển tập
          </a>
          <a className="nav-title" href="/">
            Tủ sách cộng đồng
          </a>
          <a className="nav-title" href="/">
            Sáng tác
          </a>
        </div>
        <div className="left_nav">
          <div className="search">
            <a href="/search">
              <Search />
              {/* <div className="icon-wrap-nav nav_avatar">
                <svg
                  className="svg-inline--fa fa-search fa-w-16"
                  fill="#ccc"
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </div> */}
            </a>
          </div>

          <button className="button button_1">
            <a href="/" className="yellow">
              Gói cước
            </a>
          </button>
          <button className="button button_2">
            <Link to="/register" className="white">
              Đăng ký
            </Link>
          </button>
          <button className="button button_3">
            <a href="/login" className="white">
              Đăng nhập
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
