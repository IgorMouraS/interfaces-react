// src/App.js
import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {

    return (
        <div className="App">
            <h1>Seja Bem-vindo!</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/listadinamica">ListaDinamica</Link>
                <Link to="/game">Game</Link>
                <Link to="/fruit">Fruit</Link>
                <Link to="/movielib">MovieLib</Link>
            </div>

            <Outlet />
        </div>
    );
}

export default App;