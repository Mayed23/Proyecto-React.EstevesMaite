import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Why Yes!!</h1>

        <ul>
            <li>Bomba de Gasolina</li>
            <li>Filtro de gasolina</li>
            <li>Kit Indicador/Flotante</li>
        </ul>
        <CartWidget/>
        
    </header>
  )
}

export default NavBar