import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { loadSingleProduct } from '../../services/mockAPI';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {

    let [item, setItem] = useState({})

    useEffect(() => {
        loadSingleProduct().then((resItem)=> setItem(resItem))
    }, []);

  return (
    <div>
        <div>
            <ItemDetail
                key = {item.id}
                img = {item.img}
                title = {item.title}
                price = {item.price}
                description = {item.detail}
                stock = {item.stock}
            />
        </div> 
    </div>
  )
}

export default ItemDetailContainer