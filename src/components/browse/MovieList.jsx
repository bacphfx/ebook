import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import "./MovieList.css";
import useModal from "../../utils/useModal";
import BookInfo from "./BookInfo";
import BookAPI from "../api/bookAPI";

const base_url = "https://image.tmdb.org/t/p/original";

function MovieList({ title, data, number }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { isShowing, toggle } = useModal();

  useEffect(() => {
    async function fetchData() {
      const request = await BookAPI.getBooksByCategory(data);
      setMovies(request.data.data.slice(0, number));
      return request;
    }
    fetchData();
  }, [data]);

  const handleClick = (movie) => {
    toggle();
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  return (
    <div className="row">
      <h2 className="movie-list-title">{title}</h2>
      <div className="row_posters sc2">
        {movies.map((movie) => {
          return (
            <div className="book" key={movie.id}>
              <img
                onClick={() => handleClick(movie)}
                className="row_poster"
                src={movie.image}
                alt={movie.name}
              />
              <h4>{movie.title}</h4>
            </div>
          );
        })}
      </div>
      <BookInfo isShowing={isShowing} hide={toggle} data={selectedMovie} />
    </div>
  );
}

export default MovieList;
