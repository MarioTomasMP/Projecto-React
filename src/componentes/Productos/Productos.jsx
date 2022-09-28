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
    <div img src="../../Polygon Luminary.svg" className='fondo'>
      <h2>{props.greeting}</h2>
      {/* <div className='container-novedades'> 
      
            <Tarjeta
              title="Funko Pop" 
              descripcion="Nuevo muñeco Funko de Naruto,¡Compralo Ahora! " 
              precio={5000} 
              img="https://http2.mlstatic.com/D_NQ_NP_818985-MLA45845678783_052021-V.jpg"
            />
            <Tarjeta
              title="Funko Pop" 
              descripcion="Nuevo muñeco Funko de Tanjiro,¡Compralo Ahora! " 
              precio={4500} 
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtAP_PWhSE7stweljV77t9lz-VA2WzWovAA&usqp=CAU"
            />
            <Tarjeta 
              title="Funko Pop" 
              descripcion="Nuevo muñeco Funko de Jhon Wick,¡Compralo Ahora! " 
              precio={3799}
              img="https://cf.shopee.cl/file/67b3a7edda57f990b3319af7033320db"
            />
            <Tarjeta 
              title="Funko Pop" 
              descripcion="Nuevo muñeco Funko de Skeleton,¡Compralo Ahora! " 
              precio={2999}
              img="https://http2.mlstatic.com/D_NQ_NP_716213-MLA44767618226_012021-O.webp"
            />
            <Tarjeta 
              title="Funko Pop" 
              descripcion="Nuevo muñeco Funko de Steve con armadura de diamante,¡Compralo Ahora! " 
              precio={3100}
              img="https://i5.walmartimages.com/asr/a51cdd2c-cbee-4ba8-aef4-22338bf30242.baef839347c97b702ca79ac8322012b1.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
            />
            <Tarjeta 
              title="Funko Pop" 
              descripcion="Nuevo muñeco Funko de Thor Infinity war,¡Compralo Ahora! " 
              precio={5799}
              img="https://m.media-amazon.com/images/S/aplus-media/sota/6f74a76e-07c5-4b26-b9a9-80a26e0aa282._CR0,0,300,300_PT0_SX300__.jpg"
            />
      </div> */}
      <div>
          <ItemList items={items}/>
      </div>
    </div>
  )
}

export default Productos