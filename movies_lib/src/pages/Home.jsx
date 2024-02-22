import { useState, useEffect } from "react";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();
    const dataResults = data.results;

    console.log(dataResults);

    const newData = dataResults.map((data) => {
      return {
        id: data.id,
        original_language: data.original_language,
        title: data.title,
        overview: data.overview,
        vote_average: data.vote_average,
        poster_path: data.poster_path
      }
    });

    setTopMovies(newData);

    console.log(newData);

  };

  useEffect(() => {

    const topRatedUrl = `${movieURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);

    getTopRatedMovies(topRatedUrl);

  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((topMovies) => <p>{topMovies.title}</p>)}
      </div>

    </div>
  )
}

export default Home
