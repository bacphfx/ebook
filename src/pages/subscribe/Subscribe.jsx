import React, { useEffect, useState } from "react";
import Nav from "../../components/browse/Nav";
import "./subscribe.css";
import SubscribeItem from "../../components/subscribe/SubscribeItem";
import SubscribeAPI from "../../components/api/subscribeAPI";

const Subscribe = () => {
  const [subscribes, setSubscribes] = useState([]);
  useEffect(() => {
    const getSubscribes = async () => {
      try {
        const res = await SubscribeAPI.getAllData();
        setSubscribes(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSubscribes();
  }, []);
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
      <div className="subscribe-list">
        {subscribes.map((sub) => (
          <SubscribeItem key={sub.id} data={sub} />
        ))}
      </div>
    </div>
  );
};

export default Subscribe;
