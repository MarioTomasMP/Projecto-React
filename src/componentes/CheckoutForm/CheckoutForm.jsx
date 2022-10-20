import React from 'react'

function CheckoutForm() {
  return (
    <div>
        <form>
            <div>
                <label>Nombre</label>
                <input
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    required
                />
            </div>
            <div>
                <label>Numero</label>
                <input
                    name='phone'
                    type='text'
                    placeholder='Telefono'
                    required
                />
            </div>
        </form>
    </div>
  )
}

export default CheckoutForm