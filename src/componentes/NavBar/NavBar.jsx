import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Why Yes!!</h1>
      </Link>

      <ul>
        <li>
          <NavLink to="/categoria/1"> Kit Bomba de Gasolina </NavLink>
        </li>
        <li>
          <NavLink to="/categoria/2"> Filtro de gasolina </NavLink>
        </li>

        <li>
          <NavLink to="/categoria/3"> Kit Indicador/Flotante </NavLink>
        </li>        
      </ul>
      <CartWidget />

    </header>
  )
}

export default NavBar