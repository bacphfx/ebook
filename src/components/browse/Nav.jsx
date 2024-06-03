import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Logout, NotificationsNone, Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import UserAPI from "../api/userAPI";

function Nav() {
  const auth = useSelector((state) => state.auth);
  const user = JSON.parse(auth.user);
  const isAuth = auth.isAuthenticated;
  const token = localStorage.getItem("token");
  const [show, handleshow] = useState(false);

  const navigate = useNavigate();

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

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // const res = await UserAPI.postLogout(token);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      // console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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
          <a className="nav-title" href="/">
            Sách điện tử
          </a>
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
              <Search style={{ color: "white" }} fontSize="large" />
            </a>
          </div>

          <button className="button button_1">
            <a href="/" className="yellow">
              Gói cước
            </a>
          </button>
          {!isAuth ? (
            <>
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
  );
}

export default Nav;
