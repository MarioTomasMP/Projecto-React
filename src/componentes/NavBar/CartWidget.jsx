import React from 'react'
import { BsCart4 } from 'react-icons/bs';

function CartWidget() {
  return (
    <div>
        <button type='button' className='btn-carrito'><BsCart4 /></button>
    </div>
  )
}

export default CartWidget