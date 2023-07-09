import { useState, useEffect } from 'react'
import { getRepuestos, getRepuestosCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const [repuestos, setRepuestos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {

    const funcion = idCategoria ? getRepuestosCategoria : getRepuestos;
    funcion(idCategoria)
      .then(res => setRepuestos(res))
      .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <>

      <h2 style={{ color: 'blueviolet', textAlign: 'center' }} >Mis Respuestos <img src="../public/ogo-chevrolet.png" alt="logo" /></h2>

      <ItemList repuestos={repuestos} />



    </>
  )
}

export default ItemListContainer