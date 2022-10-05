import React, {useState} from 'react';
import Button from '../Button/Button';
import "../Button/button.css"
import "../Productos/tarjeta.css"



function Itemcount({stock,onAddToCart}) {
    const [count, setclickCount] = React.useState(1);
    let [colortoggle, setColortoggle] = useState(true);



    function handleAdd(){
        setclickCount(count+1)
        setColortoggle(!colortoggle)
    }

    function handleSus(){
        setclickCount(count-1)
        setColortoggle(!colortoggle)
    }

  return (
    <div>
        <div className='container-count-cart'>
            <button disabled={count <=1} style={{marginLeft:'120px', color: colortoggle? "brown" : "red"}}
            onClick={handleSus} 
            className='btn'>
                -
            </button>
            <span className='span'>{count}</span>
            <button disabled={count >= stock} style={{color: colortoggle? "brown" : "red"}}
            onClick={handleAdd}
            className='btn'>
                +
            </button>    
            <Button onClick={() =>onAddToCart(count)}>Agregar al Carrito</Button>    
        </div>
    </div>
  )
}

export default Itemcount;