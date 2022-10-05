import React from 'react'
import { BsCart4 } from 'react-icons/bs';

function CartWidget() {
  return (
    <div>
      <BsCart4 className='btn-carrito' />
        {/* <button type='button' className='btn-carrito'><BsCart4 /></button> */}
    </div>
  )
}

export default CartWidget