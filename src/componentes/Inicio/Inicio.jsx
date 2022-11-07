import React from 'react'
import "./inicio.css";

function Inicio() {
  return (
    <div>
        <div className='container'>
            <h2>
                Bienvenidos Amigos
            </h2>
            <img className='container-img'
            src="https://tierragamer.com/wp-content/uploads/2020/03/Goku-Coronavirus.jpg"
            alt=""
            style={{width: "800px", height: "450px", justifyContent:"center"}} />
            <p className='container-text'>
                Te damos la bienvenida y te invitamos a formar partede este bello universo del anime y los juegos, en mercadito geck ponemos lo mejor y esperamos darlo siempre lo mejor. ¡Gracias por visitarnos!
            </p>
        </div>
    </div>
  )
}

export default Inicio