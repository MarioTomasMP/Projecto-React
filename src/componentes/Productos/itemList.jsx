import React from 'react';
import Tarjeta from './Tarjeta';


    
  function ItemList(props) {
      
    return (
      <div>
      <div className="container-novedades">
          {props.items.map((item) => {
              return (<Tarjeta
                key = {item.id}
                offer = {item.offer}
                id = {item.id}
                img = {item.img}
                title = {item.title}
                descripcion = {item.detail}
                categoria = {item.category}
                precio = {item.price}/>
              );
            })}
      </div>
      </div>
    )
  }
    
  export default ItemList;