import React, { useContext } from "react";
import "./nav.css";
import { movie_contects } from "./movie_contects";

const Nav = () => {
  const [movies, setMovies] = useContext(movie_contects);
  return (
    <div className="bla">
      <h2>Edo</h2>
      <p>Popis filmova: {movies.length} </p>
    </div>
  );
};

export default Nav;
