// src/App.js
import { Outlet } from "react-router-dom";
import './App.css';
import NavApp from './components/AppComponent/NavApp.jsx'

function App() {

    return (
        <div className="App">

            <NavApp />
            <Outlet />
        </div>
    );
}

export default App;