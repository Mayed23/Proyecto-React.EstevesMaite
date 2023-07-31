import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Service/Config";

const ItemDetailContainer = () => {

  const [repuesto, setRepuesto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem);
    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoRepuesto = { id: res.id, ...data }
        setRepuesto(nuevoRepuesto);
      })
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div>
      <ItemDetail {...repuesto} />
    </div>
  )
}

export default ItemDetailContainer