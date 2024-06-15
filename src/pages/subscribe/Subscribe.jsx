import React, { useEffect, useState } from "react";
import Nav from "../../components/browse/Nav";
import "./subscribe.css";
import SubscribeItem from "../../components/subscribe/SubscribeItem";
import SubscribeAPI from "../../components/api/subscribeAPI";
import Pagination from "../../components/browse/Pagination";

const Subscribe = () => {
  const [subscribes, setSubscribes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const getSubscribes = async () => {
      try {
        const res = await SubscribeAPI.getAllData(4, currentPage);
        setTotalPages(Math.ceil(res.data.total / res.data.per_page));
        setSubscribes(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSubscribes();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Nav />
      <div className="banner-subscribe">
        <div className="banner-subscribe-overlay"></div>
        <div className="banner-subscribe-header">
          <p>Gói hội viên</p>
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Subscribe;
