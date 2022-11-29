
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
        <Navbar/>
        <ItemListContainer greeting="Bienvenido!"/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
