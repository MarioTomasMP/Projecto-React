import React, {useEffect, useState}from 'react'
import { loadSingleProduct } from '../../services/firestore';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import { Waveform } from '@uiball/loaders'



function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const {id} = useParams();


    useEffect(() => {
        loadSingleProduct(id)
        .then((resItem)=> setItem(resItem))
        .catch((errorMsj)=> {
        console.log(errorMsj.message)
        setError(errorMsj.message);
    })
        // .finally(() => setIsLoading(false));
    }, [id]);

    if(!item.id) {
        return(
        <>
        {error ? (
            <div>
                <h3>Error al cargar el producto</h3>
                <p>{error}</p>
            </div>
            ): (
                <Waveform 
                size={60}
                lineWeight={3.5}
                speed={1} 
                color="darkred" 
               />
            )}
        </>
        );
    }


  return (
    <div>
        <ItemDetail
            key = {item.id}
            id = {item.id}
            offer = {item.offer}
            img = {item.img}
            title = {item.title}
            price = {item.price}
            description = {item.detail}
            stock = {item.stock}
            />
     </div> 
  )
}

export default ItemDetailContainer