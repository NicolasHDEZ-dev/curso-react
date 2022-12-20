
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Error404 from './components/404/Error404';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito from './components/Carrito/Carrito';
import { Contacto } from './components/Contacto/Contacto';
import { Home } from './components/Home/Home';

function App() {
  return (
    <Router>      
        <div>
          <Navbar/>
       </div>  
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/catalogo" element={<ItemListContainer/>}/>
        <Route path='/marca/:marcaId' element={<ItemListContainer/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path='/*' element={<Error404/>} />
      </Routes>

    </Router>
 
  );
}

export default App;
