import './App.css';
import Body from './componentes/Body/Body';
import NavBar from './componentes/NavBar/Nav';
import Productos from './componentes/Productos/Productos';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Productos greeting="Bienvenidos a mi tienda geek"/>
    </div>
  );
}

export default App;
