import React from "react";
import "./subscribeItem.css";
import { Link } from "react-router-dom";

const SubscribeItem = ({ data }) => {
  return (
    <div className="subscribe-wrapper">
      <div className="subscribe-title">{data?.title}</div>
      <div className="subscribe-price">
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(data?.price)}
      </div>
      <div className="subscribe-time">{data?.time} ngày</div>
      <div className="subscribe-desc">{data?.description}</div>
      <Link to="/buy" state={{ data: data }}>
        <button className="subscribe-button">Mua gói</button>
      </Link>
    </div>
  );
};

export default SubscribeItem;
