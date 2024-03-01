import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

import '../../styles/NavApp.css'

const NavApp = () => {

  const { primeiraParteDaURL } = useParams();
  const [parametroAtual, setParametroAtual] = useState(primeiraParteDaURL);

  useEffect(() => {
    setParametroAtual(primeiraParteDaURL);
  }, [primeiraParteDaURL]);

  console.log(parametroAtual)

  return (
    <div className={parametroAtual ? parametroAtual : "home"}>
      <h1>Seja Bem-vindo!</h1>
      <div className="links">
        <Link to="/listadinamica">ListaDinamica</Link>
        <Link to="/game">Game</Link>
        <Link to="/fruit">Fruit</Link>
        <Link to="/movielib">MovieLib</Link>
      </div>
    </div>
  )
}

export default NavApp
