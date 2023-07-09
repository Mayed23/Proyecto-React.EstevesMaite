import { useState, useEffect } from "react";
import { getUnRepuestos } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [repuesto, setRepuesto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    getUnRepuestos(idItem)
      .then(res => setRepuesto(res))
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...repuesto} />
      
    </div>
  )
}

export default ItemDetailContainer