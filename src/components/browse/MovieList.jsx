import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import movieTrailer from "movie-trailer";
import MovieDetail from "../../components/browse/MovieDetail";
import "./MovieList.css";
import useModal from "../../utils/useModal";
import Modal from "./Modal";

const base_url = "https://image.tmdb.org/t/p/original";

function MovieList({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { isShowing, toggle } = useModal();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `http://localhost:5000/api/movies${fetchUrl}`
      );
      // console.log(request);
      setMovies(request.results.slice(0, 6));
      return request;
    }
    fetchData();
  }, [fetchUrl]);

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
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <h4>{movie.name ? movie.name : movie.title}</h4>
            </div>
          );
        })}
      </div>
      <Modal isShowing={isShowing} hide={toggle} data={selectedMovie} />
    </div>
  );
}

export default MovieList;
