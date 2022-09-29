import React,{useState, useEffect} from 'react';
import Tarjeta from './Tarjeta';
import { useParams } from 'react-router-dom'
import { loadProductsForCategory} from '../../services/mockAPI';
    
  function ItemList(props) {
    let [item, setItem] = useState({})
    const {category} = useParams();


    useEffect(() => {
        loadProductsForCategory(category).then((resItem)=> setItem(resItem))
    }, [category]);
    
      
    return (
      <div className="container-novedades">
          {props.items.map((item) => {
              return (<Tarjeta
                key = {item.id}
                id = {item.id}
                img = {item.img}
                title = {item.title}
                descripcion = {item.detail}
                categoria = {item.category}
                precio = {item.price}/>
              );
            })}
      </div>
    )
  }
    
  export default ItemList