import React, {useState, useEffect} from 'react';
import "./tarjeta.css";
import {loadProducts, loadProductsForCategory}  from '../../services/firestore';
import ItemList from '../Productos/itemList';
import { useParams } from 'react-router-dom';
import { Waveform } from '@uiball/loaders';

function Productos(props) {

  let [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const {category} = useParams();


  useEffect(()=> {
    setItems([])
    setLoading(true)
    if(category === undefined){
      loadProducts().then(response => {
        setItems(response)
        .finally(() => setLoading(false));
      });
     }else {
      loadProductsForCategory(category)
      .then(response => setItems(response))
      .finally(() => setLoading(false));
    }
  }, [category]);


  return (
    <div>
        {
          loading ? (<Waveform 
          size={60}
          lineWeight={3.5}
          speed={1} 
          color="darkred" 
         />):(<ItemList items={items} />)
        }
    </div>
  )
}

export default Productos