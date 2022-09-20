import React, {useState} from 'react';
import './button.css';

/* Hook de useState */

function Button({children}) {

    
    let [color, setColor] = useState("brown");
    let [colortoggle, setColortoggle] = useState(true);

    function handleClick(){
        setColortoggle(!colortoggle)
    }



  return (
    <div>
        <button
        style={{color: colortoggle? "brown" : "red"}}
        onClick={handleClick} 
        className='btn'>
        </button>   
    </div>
  )
}

export default Button