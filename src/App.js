import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Productos/ItemListContainer';

function App() {
  const greeting = 'Prueba del item list container'
  return (
    <div className="App text-white">
      <NavBar />
      <h2>Ofertas de la Semana</h2>
      <ItemListContainer greeting={greeting}/>
    </div>
  );
}

export default App;
