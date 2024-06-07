import React from "react";
import Nav from "../../components/browse/Nav";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <div>
      <Nav />
      <div className="banner-subscribe">
        <div className="banner-subscribe-overlay"></div>
        <div className="banner-subscribe-header">
          <h1>Gói hội viên</h1>
        </div>
        <div className="banner-subscribe-desc">
          <p>Trở thành hội viên và mở khóa tất cả các sách</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
