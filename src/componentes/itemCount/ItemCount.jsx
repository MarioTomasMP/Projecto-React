import React, {useState, useEffect} from 'react';
import "../Button/button.css"


function Itemcount(props) {

    console.log("Stock:", props.stock)
    const [count, setclickCount] = React.useState(props.initial);
    let [color, setColor] = useState("brown");
    let [colortoggle, setColortoggle] = useState(true);
    
    console.log("Stock:", props.stock);

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
        <button style={{color: colortoggle? "brown" : "red"}}
        onClick={handleSus} 
        className='btn'>
            -
        </button>
        <span className='span'>{count}</span>
        <button style={{color: colortoggle? "brown" : "red"}}
        onClick={handleAdd}
        className='btn'>
            +
        </button>
        

        
    </div>
  )
}

export default Itemcount;