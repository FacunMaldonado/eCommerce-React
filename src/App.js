import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/Productos/ItemDetailContainer';
import ItemListContainer from './components/Productos/ItemListContainer';

function App() {
  const greeting = 'Prueba del item list container'
  return (
    <div className="App text-white">
      <NavBar />
      <h2>Ofertas de la Semana</h2>
      <ItemListContainer greeting={greeting}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
