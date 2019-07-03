import React from "react";
import "./App.css";
import Nav from "./nav";
import MovieList from "./movieList";
import { MovieProvider } from "./movie_contects";
import AddMovie from "./add_movie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
