import './App.css';
import ItemDetailContainer from './componentes/itemDetail/ItemDetailContainer';

import NavBar from './componentes/NavBar/Nav';
// import Productos from './componentes/Productos/Productos';



function App() {
  return (
    <div className="App">
      <NavBar />
      <><h1>Detalle de item</h1>
      </>
      {/* <Productos greeting="Bienvenidos a mi tienda geek"/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
