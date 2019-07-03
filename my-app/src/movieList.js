import React, { useState, useContext } from "react";
import Movie from "./movie";
import { movie_contects } from "./movie_contects";

const MovieList = () => {
  const [movies, setMovies] = useContext(movie_contects);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
