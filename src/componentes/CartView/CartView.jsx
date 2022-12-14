import React,{ useState } from 'react';
import { useContext } from 'react';
import { cartContex } from '../../context/cartContext';
import Button from '../Button/Button';
import { Link} from 'react-router-dom';

import '../CartView/cartView.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm';

function CartView() {

  const [returnHome, setReturnHome] = useState(true)
  const context = useContext(cartContex);
  const {cart, removeItem, clearCart, totalPriceInCart, finalPriceInCart} = context;



  function handleDeleteItem(id){
    removeItem(id)
  }

  function handleClearCart(){
    clearCart()
    setReturnHome(false)
  }



let emptyCart = cart.length === 0;

if(emptyCart){
   return <div>
        No elegiste ningun producto
    </div>
}



  return (
    <div className='container-cartView'>
      {cart.map ( (item) =>(
        <div key={item.id} className='card-cartView'>
          <img className='card-cartView-img' src={item.img} alt="" />
          <h3 className='card-cartView-title'>{item.title}</h3>
          <p className='card-cartView-price'>{totalPriceInCart(item.price, item.count)}</p>
          <span className='card-cartView-count'>{item.count} producto en el carrito</span>
          <Button className='cart-btn' onClick={() =>handleDeleteItem(item.id)}>Eliminar</Button>

        </div>
      ))}
      <>
      {returnHome ? <Button onClick={() =>handleClearCart()}>Limpiar Carrito</Button> :
      <Link to='/'><Button>volver</Button></Link>}
      <span>{finalPriceInCart()}</span>
      </>
      <>
      <CheckoutForm/>
      </>
    </div>
  )
}

export default CartView