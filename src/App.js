import './App.css';
import NavBar from './componentes/NavBar/Nav';
import Productos from './componentes/Productos/Productos';
import ItemDetailContainer from './componentes/itemDetail/ItemDetailContainer';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemList from './componentes/Productos/itemList';
import Footer from './componentes/Footer/Footer';
import ItemDetail from './componentes/itemDetail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* Rutas */}
      <Routes>
        <Route path='/' element={<Productos greeting="Bienvenidos a mi tienda geek"/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categoria/:category' element={<ItemList/>}/>
        <Route path='/cart' element={<ItemDetail/>}/>
        <Route path='*' element={<h1>404 Page not found</h1>}/>
        </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
