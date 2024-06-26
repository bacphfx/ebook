import React, { useEffect, useState } from "react";
import CategoriesAPI from "../api/categoryAPI";
import "./menu.css";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const Menu = ({ hide }) => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getCategories = async (page) => {
      try {
        const res = await CategoriesAPI.getAllData(page);
        setCategories(res.data.data);
        setTotalPages(Math.ceil(res.data.total / res.data.per_page));
      } catch (error) {
        console.log(error);
      }
    };
    getCategories(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="overlay" onClick={hide}></div>
      <div className="categories-wrapper">
        <div className="categories-header">
          <h3>Sách điện tử</h3>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <Link
              onClick={hide}
              to={`/category/${category.id}`}
              state={{ categoryName: category.name }}
              className="category"
              key={category.id}
            >
              <div className="category-name">{category.name}</div>
            </Link>
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

export default Menu;
