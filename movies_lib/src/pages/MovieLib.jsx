import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

function MovieLib() {

  return (
    <>
      <div className="movielib">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default MovieLib
