import React, {useState, useEffect} from 'react'
import Tarjeta from './Tarjeta'
import "./tarjeta.css"
import loadProducts  from '../../services/mockAPI'
import ItemList from '../Productos/itemList'

function Productos(props) {

  let [items, setItems] = useState([]);
  useEffect(
    ()=>{
      loadProducts().then (response => {
        setItems(response)
      });
    }, []);


  return (
    <div>
      <h2>{props.greeting}</h2>
      <div>
          <ItemList items={items}/>
      </div>
    </div>
  )
}

export default Productos