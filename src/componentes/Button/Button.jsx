import React, {useState} from 'react';
import './button.css';
import '../Productos/tarjeta.css'

/* Hook de useState */

function Button(props,{children}) {


    let [colortoggle, setColortoggle] = useState(true);

    function handleClick(){
        setColortoggle(!colortoggle)
        props.onClick && props.onClick();
    }



  return (
    <div>
        <button
        style={{color: colortoggle? "brown" : "red"}}
        onClick={handleClick} 
        className='detail-btn-carrito'>{props.children}
        </button>   
    </div>
  )
}

export default Button