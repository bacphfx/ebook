import React, { useEffect, useState } from "react";

import MovieList from "../../components/browse/MovieList";
import requests from "../../utils/requests";
import Banner from "../../components/browse/Banner";
import Nav from "../../components/browse/Nav";

import "./Browse.css";
import Slider from "../../components/browse/Slider";
import { useSelector } from "react-redux";
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
        <MovieList
          title={category.name}
          data={category.id}
          key={category.id}
          number={6}
        />
      ))}
      {/* <MovieList title="Sách miễn phí" fetchUrl={requests.fetchTrending} />
      <MovieList title="Mới nhất" fetchUrl={requests.fetchTopRated} />
      <MovieList title="Đề xuất" fetchUrl={requests.fetchActionMovies} />
      <MovieList title="Bảng xếp hạng" fetchUrl={requests.fetchComedyMovies} />
      <MovieList title="Sách mua lẻ" fetchUrl={requests.fetchHorrorMovies} />
      <MovieList
        title="Podcast đặc sắc"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MovieList title="Combo sách" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default Browse;
