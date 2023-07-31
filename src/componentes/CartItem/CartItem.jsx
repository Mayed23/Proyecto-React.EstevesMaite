import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./cartItem.css";


const CartItem = ({ Item, cantidad }) => {
  const { eliminarRepto } = useContext(CartContext);


  return (
    <div className="cartItem">
      <h4>{Item.nombre}</h4>
      <h5>{Item.modelo}</h5>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {Item.precio}</p>
      <button className="btn-cartItem" onClick={() => eliminarRepto(Item.id)}> Eliminar </button>

    </div>
  )
}

export default CartItem