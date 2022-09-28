import React from 'react'
import Tarjeta from './Tarjeta';

function ItemList(props) {

  
  return (
    <div className="container-novedades">
        {props.items.map((item) => {
            return (<Tarjeta
              key = {item.id}
              img = {item.img}
              title = {item.title}
              descripcion = {item.detail}
              precio = {item.price}/>
            );
          })}
    </div>
  )
}

export default ItemList