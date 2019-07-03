import React, { useState, useContext } from "react";
import { movie_contects } from "./movie_contects";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(movie_contects);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  /*ubaciti key id da ne ucitava gresku, mozda za svaki unos da ubaci novi*/

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form onSubmit={addMovie}>
      <h2>ime filma</h2>
      <input type="text" name="name" value={name} onChange={updateName} />
      <h2>cijena filma</h2>
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <br />
      <br />
      <button>DODAJ FILM</button>
    </form>
  );
};

export default AddMovie;
