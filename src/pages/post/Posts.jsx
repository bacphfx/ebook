import React, { useEffect, useState } from "react";
import postAPI from "../../components/api/postAPI";
import PostItem from "../../components/post/PostItem";
import "./posts.css";
import Nav from "../../components/browse/Nav";
import Pagination from "../../components/browse/Pagination";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    try {
      const getPosts = async (page) => {
        const res = await postAPI.getAllData(page);
        setPosts(res.data.data);
        setTotalPages(Math.ceil(res.data.total / res.data.per_page));
      };
      getPosts(currentPage);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <Nav />
      <div className="post-container">
        <header className="App-header">
          <h1>Tin tức</h1>
        </header>
        <div className="news-container">
          {posts.map((article, index) => (
            <PostItem key={index} article={article} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Posts;
