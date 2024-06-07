import React, { useEffect, useState } from "react";

import BookList from "../../components/browse/BookList";
import Nav from "../../components/browse/Nav";

import "./Browse.css";
import Slider from "../../components/browse/Slider";
import CategoriesAPI from "../../components/api/categoryAPI";

function Browse() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async (page) => {
      try {
        const res = await CategoriesAPI.getAllData(page);
        setCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories(1);
  }, []);
  return (
    <div className="app">
      <Nav />
      <Slider />
      {categories.map((category) => (
        <BookList
          title={category.name}
          data={category.id}
          key={category.id}
          number={6}
        />
      ))}
    </div>
  );
}

export default Browse;
