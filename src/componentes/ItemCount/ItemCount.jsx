import { useState } from "react";
import './ItemCount.css';


const ItemCount  = ({ stock, inicial, onAdd }) => {

    const [contador, setContador] = useState(inicial);
  
      const aumentarContador = () => {
      if (contador < stock) {
        setContador(contador + 1);
      }
  
    }
  
    const reducirContador = () => {
      if (contador > inicial) {
        setContador(contador - 1);
      }
  
    }
  
    const agregarCarrito = () => {
      console.log(`Agregado ${contador} items`);
    }
    return (
      <div className="contador">
        <button className="btn" onClick={reducirContador}> - </button>
        
        <strong className="strong"> {contador} </strong>
        
        <button className="btn"  onClick={aumentarContador}> + </button>        
      
        <button className="btnAgrgarCarrito" onClick={(agregarCarrito)} > Agregar al carrito</button>
      </div>
    ) 
  } 
 

export default ItemCount
