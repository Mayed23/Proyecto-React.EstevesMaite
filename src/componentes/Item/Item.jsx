import { Link } from 'react-router-dom'
import '../Item/Item.css'



const Item = ({ id, nombre, modelo, precio, img, stock }) => {

  return (
    <div className="cardRptos">
      <img className="imagenRptos" src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Modelo: {modelo}</p>
      <p>Precio US$: {precio}</p>
      <p>ID: {id}</p>
      <p>Stock: {stock}</p>
      <Link to={`/Item/${id}`}> Detalles </Link>
    </div>
  )
}


export default Item