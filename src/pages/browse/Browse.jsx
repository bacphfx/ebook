import React from "react";

import MovieList from "../../components/browse/MovieList";
import requests from "../../utils/requests";
import Banner from "../../components/browse/Banner";
import Nav from "../../components/browse/Nav";

import "./Browse.css";
import Slider from "../../components/browse/Slider";
import { useSelector } from "react-redux";

function Browse() {
  return (
    <div className="app">
      <Nav />
      <Slider />
      <MovieList title="Sách miễn phí" fetchUrl={requests.fetchTrending} />
      <MovieList title="Mới nhất" fetchUrl={requests.fetchTopRated} />
      <MovieList title="Đề xuất" fetchUrl={requests.fetchActionMovies} />
      <MovieList title="Bảng xếp hạng" fetchUrl={requests.fetchComedyMovies} />
      <MovieList title="Sách mua lẻ" fetchUrl={requests.fetchHorrorMovies} />
      <MovieList
        title="Podcast đặc sắc"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MovieList title="Combo sách" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Browse;
