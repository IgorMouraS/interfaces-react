// src/App.js
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './styles/App.css';
import Home from './pages/Home';
import Game from './pages/Game';
import Fruit from './pages/Fruit';

function App() {
  const [interfaces, setInterfaces] = useState(true);
  const [content, setContent] = useState(<Home />);

  const handleClick = () => {
    if (interfaces) {
      setInterfaces(false);
      setContent(<Home />);
    } else {
      setInterfaces(true);
      setContent(<Game />);
    }
    console.log(interfaces);
  }

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/game">Game</Link>
      <Link to="/fruit">Fruit</Link>
      
      {content}

      <button onClick={handleClick} type="button">Jogo da Velha</button>
      
      <Fruit />
    </div>
  );
}

export default App;
