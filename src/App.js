import './App.css';
import NavBar from './componentes/NavBar/Nav';
import Productos from './componentes/Productos/Productos';
import ItemDetailContainer from './componentes/itemDetail/ItemDetailContainer';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import CartContexProvider from './context/cartContext';
import CartView from './componentes/CartView/CartView';
import Checkout from './componentes/Checkout/Checkout';



function App() {

  return (
    
    <CartContexProvider>
    <BrowserRouter>
      <NavBar />
      {/* Rutas */}
      <Routes>
        <Route path='/' element={<Productos greeting="Bienvenidos a mi tienda geek"/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
        <Route path='/accesorios/:category' element={<Productos/>}/>
        <Route path='/cart' element={<CartView/>}/>
        <Route path='/checkout/:response' element={<Checkout/>}/>
        <Route path='*' element={<h1>404 Page not found</h1>}/>
        </Routes>

      <Footer/>
      </BrowserRouter>
      </CartContexProvider>
    
    
  );
}

export default App;
