import React, {useEffect, useState}from 'react'
import { loadSingleProduct } from '../../services/mockAPI';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {

    let [item, setItem] = useState({})


    const {id} = useParams();


    useEffect(() => {
        loadSingleProduct(id).then((resItem)=> setItem(resItem))
    }, [id]);

  return (
    <div>
        <div>
            <ItemDetail
                key = {item.id}
                id = {item.id}
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