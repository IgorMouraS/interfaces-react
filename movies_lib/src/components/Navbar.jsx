import { Link } from "react-router-dom";
import { useState } from "react";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import '../styles/Navbar.css'

const Navbar = () => {

    const [search, setSearch] = useState("");

    const searchMovies = (e) => {
        setSearch(e.target.value)
        console.log(search);
    }

    return (
        <div>
            <nav id="navbar">
                <h2>
                    <Link to="/"><BiCameraMovie />MoviesLib</Link>
                </h2>
                <form>
                    <input type="text" placeholder="Busque um filme" onChange={searchMovies} value={search}/>
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar
