import React, {useState, useEffect} from 'react';
import "../Button/button.css"


function Itemcount(props) {
    const [count, setclickCount] = React.useState(props.initial);
    let [color, setColor] = useState("brown");
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
        <button disabled={count <=1} style={{color: colortoggle? "brown" : "red"}}
        onClick={handleSus} 
        className='btn'>
            -
        </button>
        <span className='span'>{count}</span>
        <button disabled={count >= props.stock} style={{color: colortoggle? "brown" : "red"}}
        onClick={handleAdd}
        className='btn'>
            +
        </button>
        

        
    </div>
  )
}

export default Itemcount;