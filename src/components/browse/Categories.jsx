import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import CategorisAPI from "../api/categoryAPI";
import "./categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const page = 1;
  useEffect(() => {
    const getCategories = async () => {
      const res = await CategorisAPI.getAllData(page);
      setCategories(res.data.data);
    };
    getCategories();
  }, []);
  console.log(categories);
  return (
    <div className="app">
      <Nav />
      <div className="categories-wrapper">
        <div className="categories-header">
          <h1>Sách điện tử</h1>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <div className="category" key={category.id}>
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
