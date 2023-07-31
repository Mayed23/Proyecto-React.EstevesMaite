import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../Service/Config'

const ItemListContainer = () => {
  const [repuestos, setRepuestos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misRepuestos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misRepuestos)
      .then(res => {
        const nuevosRepuestos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }

        })
        setRepuestos(nuevosRepuestos);
      })
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