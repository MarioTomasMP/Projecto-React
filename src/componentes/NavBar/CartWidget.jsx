import React, {useContext} from 'react'
import { BsCart4 } from 'react-icons/bs';
import {cartContex} from '../../context/cartContext'

function CartWidget() {

  const {totalItemsInCart} = useContext(cartContex)

  return (
    <div className='btn-carrito'>
        <span className='carrito-count'>
          <BsCart4/>
          {totalItemsInCart()}
        </span>
    </div>
  )
}

export default CartWidget