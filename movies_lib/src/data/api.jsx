// api.js

export const fetchMovies = async (apiUrl, apiKey, query) => {

    let url = "";

    if(query){
        url = `${apiUrl}?${apiKey}&query=${query}`;
    } else {
        url = `${apiUrl}top_rated?${apiKey}`;
    }
    

    const res = await fetch(url);
    const data = await res.json();

    const newData = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average
    }));

    return newData;
}

export const fetchMovie = async (apiUrl, id, apiKey) => {

    const url = `${apiUrl}${id}?${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data)

    const newData = {
        id: data.id,
        title: data.title,
        poster_path: data.poster_path,
        vote_average: data.vote_average,
        tagline: data.tagline,
        budget: data.budget,
        revenue: data.revenue,
        runtime: data.runtime,
        overview: data.overview
    };

    return newData;
}