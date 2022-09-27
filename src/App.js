import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/Productos/ItemDetailContainer';
import ItemListContainer from './components/Productos/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Carrito/Cart';
import {CartProvider} from './context/CartContext'
import Checkout from './components/CheckOut/Checkout';

//IMPORTS QUE HICE PARA LA CARGA DINAMICA CON EL MOCKS - useEffect comentado para que se ejecute una unica vez
//import { useEffect } from 'react';
//import { addDoc, collection } from 'firebase/firestore';
//import { db } from './firebase/firebase';
//import { productos } from './mocks/mockData';


function App() {
  const greeting = 'Prueba del item list container'
  /* useEffect(()=>{
    const productosCollection = collection(db, "products")
    productos.map((item)=> addDoc(productosCollection, item))
    
  }, []) */
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App text-white">
          <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting={greeting} />}/>
              <Route path='/detalle/:id' element={ <ItemDetailContainer/>}/>
              <Route path='/categoria/:categoriaID' element={ <ItemListContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
