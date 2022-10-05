import React from 'react'
import Itemcount from '../itemCount/ItemCount'
import '../Productos/tarjeta.css'

function ItemDetail(props) {

  let stateCart = false;

  function handleAddToCart(count){
    alert(`Agregaste ${count} ${props.title}`);
  }

  return (
    <div className='detail-container'>
        <div className='detail'>
          <>
            <img className='detail-img' src={props.img} alt="" />
            <h3 className='detail-title'>{props.title}</h3>
            <h5 className='detail-text'>{props.description}</h5>
            <span className='detail-price'>${props.price}</span>
            </>
            <>
            {stateCart === false?
            <Itemcount onAddToCart={handleAddToCart} initial ={1} stock={props.stock}/> : <button>Finalizar Compra</button>}
            </>
        </div>
    </div>
  )
}

export default ItemDetail;