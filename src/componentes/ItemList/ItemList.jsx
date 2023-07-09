import Item from "../Item/Item"
import '../ItemList/ItemList.css'


const ItemList = ({ repuestos }) => {

  return (
    <div className="contenedorRepuestos">
      {repuestos.map(reptos => <Item key={reptos.id} {...reptos} />)}
    </div>
  )
}

export default ItemList