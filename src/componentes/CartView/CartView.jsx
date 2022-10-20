import React,{ useState } from 'react'
import { useContext } from 'react'
import { cartContex } from '../../context/cartContext'
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { buyOrderCreate }  from '../../services/firestore'
import '../CartView/cartView.css'

function CartView() {

  const [returnHome, setReturnHome] = useState(true)
  const context = useContext(cartContex);
  const {cart, removeItem, clearCart, totalPriceInCart, finalPriceInCart} = context;
  const navigate = useNavigate();


  function handleDeleteItem(id){
    removeItem(id)
  }

  function handleClearCart(){
    clearCart()
    setReturnHome(false)
  }



let emptyCart = false;

if(emptyCart){
   return <div>
      <h2>
        No hay Productos en tu carrito
      </h2>
    </div>
}

function checkout(){
  const order = {
    buyer : {
      name : "Tomas",
      phone : "2477568912",
      email : "Tomipro@gmail.com"
    },
    items: cart,
    total: finalPriceInCart()
  }
  buyOrderCreate(order)
  .then(response => {navigate(`/checkout/${response}`)});
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
      <Button onClick = {() => checkout()}>Realizar compra</Button>
      </>
    </div>
  )
}

export default CartView