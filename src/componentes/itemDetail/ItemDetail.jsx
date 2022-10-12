import React,{useState, useContext} from 'react'
import Button from '../Button/Button';
import Itemcount from '../itemCount/ItemCount'
import '../Productos/tarjeta.css'
import {cartContex} from '../../context/cartContext'

function ItemDetail(item) {

  const [itemCount, setItemCount]=useState(true);
  const { addItem } = useContext(cartContex);



  function handleAddToCart(count){
    alert(`Agregaste ${count} ${item.title} al carrito`);
    setItemCount(false)
    addItem(item, count)
  }

  const styleOffer = {
    display: item.offer ? 'inline' : 'none',
  }
  const stylePrice = {
    color: item.offer ? 'green' : 'black',
  }

  function itemPriceOffer(price, offer){
    let total = 0
    if(offer === 75){
      total = (price / 4)
    }else if(offer === 50){
      total = (price / 2)
    } else if(offer === 25){
      total = ((price / 2.50)*1.875)
    }else{
      total = price
    }
    return total
  }

  

  return (
    <div className='detail-container'>
        <div className='detail'>
          <>
           <span className='detail-price' style={stylePrice} >$ {itemPriceOffer(item.price, item.offer)}</span> 

            <span style={styleOffer}>{item.offer}% Off</span>
            <span style={{display:'none'}}>{item.id}</span>
            <img className='detail-img' src={item.img} alt="" />
            <h3 className='detail-title'>{item.title}</h3>
            <h5 className='detail-text'>{item.description}</h5>
            {item.stock === 0 ? (<span>No quedan productos en stock</span>) : (<span>Quedan {item.stock} productos en stock</span>)}
            </>
            <>
            {itemCount ? <Itemcount onAddToCart={handleAddToCart} initial ={1} stock={item.stock}/> : <Button>Carrito</Button>}

            </>
        </div>
    </div>
  )
}

export default ItemDetail;