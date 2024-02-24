import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieLib from './pages/MovieLib.jsx';
import HomeMovie from './pages/HomeMovie.jsx';
import Movie from './pages/Movie.jsx';
import SearchMovie from './pages/SearchMovie.jsx';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import ListaDinamica from './pages/ListaDinamica.jsx';
import Game from './pages/Game.jsx';
import Fruit from './pages/Fruit.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home classHome="home" />} />
          <Route path='/listadinamica' element={<ListaDinamica />} />
          <Route path='/game' element={<Game />} />
          <Route path='/fruit' element={<Fruit />} />
          <Route element={<MovieLib />}>
            <Route path='/movielib' element={<HomeMovie />} />
            <Route path='/movielib/movie/:id' element={<Movie />} />
            <Route path='/movielib/search' element={<SearchMovie />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
