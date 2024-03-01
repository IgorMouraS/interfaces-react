// src/App.js
import { Outlet } from "react-router-dom";
import './App.css';
import NavHome from './components/NavHome.jsx'

function App() {

    return (
        <div className="App">

            <NavHome />
            <Outlet />
        </div>
    );
}

export default App;