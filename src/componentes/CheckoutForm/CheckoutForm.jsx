import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { cartContex } from '../../context/cartContext';
import { buyOrderCreate }  from '../../services/firestore';

function CheckoutForm() {
    const navigate = useNavigate();
    const context = useContext(cartContex);
    const {cart, finalPriceInCart} = context;
    const [form, setForm]=useState({
        name: "",
        surname: "",
        phone: "",
        email:""
    })

    

    function checkout(event){
        event.preventDefault()
      const order = {
        buyer : form,
        items: cart,
        date: new Date(),
        total: finalPriceInCart()
      }
      buyOrderCreate(order)
      .then(response => {navigate(`/checkout/${response.id}`);
    });
    }

    function handleChange(event){
        let nameInput = event.target.name;
        let value = event.target.value;

        const newForm = {...form};
        newForm[nameInput]=value;
        setForm(newForm)
    }

  return (
    <div>
        <form onSubmit={checkout}>
            <div>
                <label>Nombre</label>
                <input
                    value = {form.name}
                    onChange={handleChange}
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    required
                />
            </div>
            <div>
                <label>Apellido</label>
                <input
                    value = {form.surname}
                    onChange={handleChange}
                    name='surname'
                    type='text'
                    placeholder='Apellido'
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    value = {form.email}
                    onChange={handleChange}
                    name='email'
                    type='text'
                    placeholder='Email'
                    required
                />
            </div>
            <div>
                <label>Numero</label>
                <input
                    value = {form.phone}
                    onChange={handleChange}
                    name='phone'
                    type='text'
                    placeholder='Telefono'
                    required
                />
            </div>
            <button type='submit'>Realizar compra</button>
        </form>
        
    </div>
  )
}

export default CheckoutForm;