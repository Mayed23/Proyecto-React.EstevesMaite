
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, modelo, precio, img}) => {

  return (
    <div className='contenedorRpto'>
     
      <h3>Nombre: {nombre}</h3>
      <img className='imgContenedorRpto' src={img} alt={nombre}/>
      <h3>Modelo: {modelo}</h3>
      <h3>Precio US$: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Repuestos marca Chevrolet genuinos, todas nuestras piezas son suministradas por el fabricante del vehículo de acuerdo con las necesidades de este. Recuerda que al no usar repuestos genuinos pierdes la garantía de tu Chevrolet. Además, puedes sufrir accidentes o provocar el mal funcionamiento de tu vehículo.
      </p>  
 
      <ItemCount   stock={10} inicial={1} />  
    
        
    </div>

    

  )
}

export default ItemDetail