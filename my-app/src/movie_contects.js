import React, { useState, createContext } from "react";

export const movie_contects = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Clockwork Orange",
      price: "20HRK",
      id: 12564
    },
    {
      name: "Persepolis",
      price: "25HRK",
      id: 22344
    },
    {
      name: "Lion King",
      price: "30HRK",
      id: 666543
    }
  ]);

  return (
    <movie_contects.Provider value={[movies, setMovies]}>
      {props.children}
    </movie_contects.Provider>
  );
};
