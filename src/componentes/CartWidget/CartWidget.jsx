import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (

    <div>

      <Link to="/Cart">
        <img className='bolsacompra' src="../public/bolsacompra.png" alt="bolsacompra" />
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }


      </Link>


    </div>
  )
}

export default CartWidget