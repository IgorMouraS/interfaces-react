// api.js

export const fetchTopRatedMovies = async (movieURL, apiKey) => {
    
    const topRatedUrl = `${movieURL}top_rated?${apiKey}`;

    const res = await fetch(topRatedUrl);
    const data = await res.json();

    const topMovies = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average
    }));

    console.log(topMovies);

    return topMovies;
}