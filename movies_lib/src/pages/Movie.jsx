import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import { fetchMovie } from "../data/api"

import '../styles/Movie.css';
import MovieCard from '../components/MovieLib/MovieCard';

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState([null]);

  useEffect(() => {

    async function getMovie() {
      const data = await fetchMovie(movieURL, id, apiKey);
      setMovie(data);
    }

    getMovie();

  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  const formatTime = (minutes) => {
    let hour = 0;

    while (minutes >= 60){
      minutes -= 60;
      hour++;
    }

    return `${hour}h${minutes}min`;
  }

  return (
    <div className='movie-page'>
      {movie.title && <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3><BsWallet2 /> Orçamento:</h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
          <h3><BsGraphUp /> Receita:</h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3><BsHourglassSplit /> Duração:</h3>
          <p>{formatTime(movie.runtime)}</p>
        </div>
        <div className="info description">
          <h3><BsFillFileEarmarkTextFill /> Descrição:</h3>
          <p>{movie.overview}</p>
        </div>
      </>}
    </div>
  )
}

export default Movie