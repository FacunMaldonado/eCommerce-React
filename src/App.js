import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/Productos/ItemDetailContainer';
import ItemListContainer from './components/Productos/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Carrito/Cart';

function App() {
  const greeting = 'Prueba del item list container'
  return (
    <BrowserRouter>
      <div className="App text-white">
        <NavBar />
        <h2>Ofertas de la Semana</h2>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={greeting} />}/>
            <Route path='/detalle/:id' element={ <ItemDetailContainer/>}/>
            <Route path='/categoria/:categoriaID' element={ <ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
