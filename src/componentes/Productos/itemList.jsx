import React from 'react'
import Tarjeta from './Tarjeta';

function itemList(props) {
  return (
    <div>
        {props.items.map((item) => {
            return (<Tarjeta
              key = {item.id}
              title = {item.title}
              descripcion = {item.detail}
              precio = {item.price}/>
            );
          })}
    </div>
  )
}

export default itemList