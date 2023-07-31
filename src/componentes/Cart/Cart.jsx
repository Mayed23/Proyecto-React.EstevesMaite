import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";


const Cart = () => {
    const { bolsaCompra, vaciarBolsaCompra, total, cantidadTotal } = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>La Bolsa de Compra Está Vacía</h2>
                <Link className="link-cart" to="/">Ver Repuestos</Link>

            </>
        )
    }
    return (

        <div className="total-total">
            {bolsaCompra.map(repuesto => <CartItem key={repuesto.id} {...repuesto} />)}
            <h3>Total: ${total} </h3>
            <h3> Cantidad Total: {cantidadTotal}</h3>

            <div className="total" >
                <button className="btn-cartItem" onClick={() => vaciarBolsaCompra()}> Vaciar Bolsa de Compra </button>
                <Link className="link-cart" to="/"> Seguir Comprando </Link>
                <Link className="link-cart" to="/checkout" > Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart