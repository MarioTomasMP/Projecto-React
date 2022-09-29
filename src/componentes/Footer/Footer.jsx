import React from 'react'
import './footer.css'
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';


function Footer() {
  return (
    <div className='footer'>
        <ul className='footer-lista'>
            <a href="#" className='footer-lista-redes'><li><BsWhatsapp /></li></a>
            <a href="#" className='footer-lista-redes'><li><BsInstagram /></li></a>
            <a href="#" className='footer-lista-redes'><li><BsFacebook /></li></a>
        </ul>
        <h3 className='footer-copy'>Derechos reservados de Mercadito Geck</h3>
    </div>
  )
}

export default Footer