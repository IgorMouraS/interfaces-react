import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import MovieCard from '../components/MovieCard';

import { fetchMovies } from "../data/api"

const searchURL = import.meta.env.VITE_SEARCH;
const apikey = import.meta.env.VITE_API_KEY;

import '../styles/MoviesGrid.css'


const SearchMovie = ({}) => {
  const [SearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = SearchParams.get("q");

  useEffect(() => {

    async function getSearchMovies() {
      const data = await fetchMovies(searchURL, apikey, query);
      setMovies(data);
    }

    getSearchMovies();

  }, [query]);

  return (
    <div className="container">
      <h2 className="title">Resuldados para: <span className='query-text'>{query}</span></h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  )
}

export default SearchMovie