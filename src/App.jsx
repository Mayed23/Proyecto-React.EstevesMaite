
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'



const App = () => {
  return (
    < >

      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="item/:idItem" element={<ItemDetailContainer />} />
            <Route path="Cart" element={<Cart/>}/>
            <Route path="/categoria/3" element={<h2 className='aviso'>Próximamente!!!!</h2>} />
            <Route path="Checkout" element={<Checkout/>}/>
            <Route path="*" element={<p className='aviso'> Página en Construcción</p>} />
            <Route />

          </Routes>
        </CartProvider>
      </BrowserRouter>




    </>
  )
}

export default App