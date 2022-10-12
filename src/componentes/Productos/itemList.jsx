import React,{useState, useEffect} from 'react';
import Tarjeta from './Tarjeta';
import { useParams } from 'react-router-dom'
import { DotPulse } from '@uiball/loaders'

import { loadProductsForCategory} from '../../services/mockAPI';
    
  function ItemList(props) {
    const [item, setItem] = useState({})
    const  [isLoading, setIsLoading] = useState(true)

    const {category} = useParams();
    

    useEffect(() => {
      setItem([])
      setIsLoading(true)
        loadProductsForCategory(category)
        .then((resItem)=> setItem(resItem))
        .finally(() => setIsLoading(false))
    }, [category]);
    
      
    return (
      <div>
        {
          isLoading && <DotPulse 
          size={70}
          speed={.80} 
          color="black" 
         />
        }
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
    
  export default ItemList