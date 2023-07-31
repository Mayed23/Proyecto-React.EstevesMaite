
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, modelo, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarRepuesto } = useContext(CartContext);

  const handlerAgregar = (cantidad) => {
    setAgregarCantidad(cantidad);

    
    const item = { id, nombre, modelo, precio };
    agregarRepuesto(item, cantidad);

  }



  return (
    <div className='contenedorRpto'>

      <h3>Nombre: {nombre}</h3>
      <img className='imgContenedorRpto' src={img} alt={nombre} />
      <h3>Modelo: {modelo}</h3>
      <h3>Precio US$: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Repuestos marca Chevrolet genuinos, todas nuestras piezas son suministradas por el fabricante del vehículo de acuerdo con las necesidades de este. Recuerda que al no usar repuestos genuinos pierdes la garantía de tu Chevrolet. Además, puedes sufrir accidentes o provocar el mal funcionamiento de tu vehículo.
      </p>

      {
        agregarCantidad > 0 ? (<Link to="/cart"> Realizar Compra </Link>) : (<ItemCount inicial={1} stock={stock} onAdd={handlerAgregar} />)
      }




    </div>



  )
}

export default ItemDetail