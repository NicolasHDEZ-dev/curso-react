
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Error404 from './components/404/Error404';
import Catalogo from './components/Catalogo de Coches/Catalogo';
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
        <Route path='/Catalogo' element={<Catalogo/>} />
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path='/*' element={<Error404/>} />
      </Routes>

    </Router>
 
  );
}

export default App;
