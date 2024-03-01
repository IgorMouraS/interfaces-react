import { useState, useEffect } from "react";

import { fetchMovies } from "../data/api"

import MovieCard from "../components/MovieLib/MovieCard";

import '../styles/MoviesGrid.css'

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const HomeMovie = () => {

  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {

    async function getTopRatedMovies() {
      const data = await fetchMovies(movieURL, apiKey);
      setTopMovies(data);
    }

    getTopRatedMovies();

  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((topMovie) => (
            <MovieCard key={topMovie.id} movie={topMovie} />
          ))}
      </div>
    </div>
  );
}

export default HomeMovie
