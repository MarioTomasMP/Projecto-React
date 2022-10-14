import React, {useState, useEffect} from 'react'
import "./tarjeta.css"
import {loadProducts, loadProductsForCategory}  from '../../services/firestore'
import ItemList from '../Productos/itemList'
import { useParams } from 'react-router-dom';

function Productos(props) {

  let [items, setItems] = useState([]);
  const category = useParams().category


    useEffect(()=> {
      if(category === undefined){
        console.log("--->", loadProducts())
        loadProducts().then(response => {
          setItems(response)
        });
       }else {
        loadProductsForCategory(category)
        .then(response => setItems(response));
      }
    },[category]
    )


  return (
    <div>
      <h2>{props.greeting}</h2>
      <div>
          <ItemList items={items} />
      </div>
    </div>
  )
}

export default Productos