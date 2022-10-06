import React, {useContext} from 'react'
import { BsCart4 } from 'react-icons/bs';
import {cartContex} from '../../context/cartContext'

function CartWidget() {

  const {totalItemsInCart} = useContext(cartContex)

  return (
    <div>
      {/* <BsCart4 className='btn-carrito'> */}
        <span>Carrito</span>
        <span>{totalItemsInCart()}</span>
      {/* </BsCart4 > */}
    </div>
  )
}

export default CartWidget