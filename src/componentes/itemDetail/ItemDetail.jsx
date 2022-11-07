import React,{useState, useContext} from 'react'
import Button from '../Button/Button';
import Itemcount from '../itemCount/ItemCount'
import '../Productos/tarjeta.css'
import {cartContex} from '../../context/cartContext'
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';

function ItemDetail({item}) {

  const [itemCount, setItemCount]=useState(true);
  const { addItem } = useContext(cartContex);

  const Toast = swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })




  function handleAddToCart(count){
    
    addItem(item, count)
    Toast.fire({
      icon: 'success',
      title: `se agregaron ${count} productos`
    });
    setItemCount(false)
  }

  const styleOffer = {
    display: item.offer ? 'inline' : 'none',
  }
  const stylePrice = {
    color: item.offer ? 'green' : 'black',
  }

  function itemPriceOffer(price, offer){
    let total = 0
    if(offer === true){
      total = (price / 2);
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

            <span style={styleOffer}>50% Off</span>
            <span style={{display:'none'}}>{item.id}</span>
            <img className='detail-img' src={item.img} alt="" />
            <h3 className='detail-title'>{item.title}</h3>
            <h5 className='detail-text'>{item.description}</h5>
            {item.stock === 0 ? (<span>No quedan productos en stock</span>) : (<span>Quedan {item.stock} productos en stock</span>)}
            </>
            <>
            {itemCount ? <Itemcount onAddToCart={handleAddToCart} initial ={1} stock={item.stock}/> : <Link to="/cart"><Button>Carrito</Button></Link>}

            </>
        </div>
    </div>
  )
}

export default ItemDetail;