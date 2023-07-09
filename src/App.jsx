import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    < >   

      <BrowserRouter>
        <NavBar/> 
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/categoria/3" element={<h2 className='aviso'>Próximamente!!!!</h2>}/>
            <Route/>
            <Route/>

          </Routes>  
      </BrowserRouter>
 

     
      
    </>
  )
}

export default App