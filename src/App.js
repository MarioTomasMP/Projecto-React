import './App.css';
import Body from './componentes/Body/Body';
import Itemcount from './componentes/itemCount/ItemCount';
import NavBar from './componentes/NavBar/Nav';
import Productos from './componentes/Productos/Productos';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Productos greeting="Bienvenidos a mi tienda geek"/>
      <Itemcount initial ={1} stock={5}/>
    </div>
  );
}

export default App;
