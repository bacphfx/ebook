import React from "react";
import "./postItem.css";
import { Link } from "react-router-dom";

const PostItem = ({ article }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="news-item">
      <img src={article.image} />
      <div className="content">
        <h2>{article.title}</h2>
        <p>{truncate(article.content, 150)}</p>
        <Link to={`/posts/${article.id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default PostItem;
