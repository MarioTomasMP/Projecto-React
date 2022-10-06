import React,{useState, useContext} from 'react'
import Button from '../Button/Button';
import Itemcount from '../itemCount/ItemCount'
import '../Productos/tarjeta.css'
import {cartContex} from '../../context/cartContext'

function ItemDetail(item) {

  const [itemCount, setItemCount]=useState(true);

  const { addItem } = useContext(cartContex);

  let countStock = item.stock;
  console.log(countStock)

  function handleAddToCart(count){
    alert(`Agregaste ${count} ${item.title} al carrito`);
    countStock = count;
    setItemCount(false)
    addItem(item, count)
  }

  return (
    <div className='detail-container'>
        <div className='detail'>
          <>
            <span style={{display:'none'}}>{item.id}</span>
            <img className='detail-img' src={item.img} alt="" />
            <h3 className='detail-title'>{item.title}</h3>
            <h5 className='detail-text'>{item.description}</h5>
            <span className='detail-price'>${item.price}</span>
            <span>Quedan {item.stock} productos</span>
            </>
            <>
            {itemCount ? <Itemcount onAddToCart={handleAddToCart} initial ={1} stock={item.stock}/> : <Button>Finalizar compra</Button>}
            </>
        </div>
    </div>
  )
}

export default ItemDetail;