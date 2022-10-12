import React from 'react';
import Card from 'react-bootstrap/Card';
import "./tarjeta.css";
import { Link } from 'react-router-dom';


function Tarjeta(props) {

  const url = `/producto/${props.id}`
  const categoria = `/producto/${props.category}`

  let classPrice = `priceTag ${props.offer && "offerTag"}`

  const styleOffer = {
    display: props.offer ? 'inline' : 'none',
    color: 'green'
  }

  function propPriceOffer(price, offer){
    let total = 0
    if(offer === 75){
      total = (price / 4)
    }else if(offer === 50){
      total = (price / 2)
    } else if(offer === 25){
      total = ((price / 2.50)*1.875)
    }else{
      total = price
    }
    return total
  }
  
  return (
    <div>
    <Card style={{ width: '18rem', height: '25rem'}} className="tarjeta">
      <Card.Img style={{ paddingTop: '15px', paddingBottom:'10px' }} variant="top" className='tarjeta-img' src={props.img} />
      <Card.Body className="tarjeta-detalle">
        <Card.Title className='tarjeta-title'>{props.title}</Card.Title>
        <Card.Text className='tarjeta-detail'>
          {props.descripcion}
        </Card.Text>
        <span style={styleOffer}>{props.offer}% Off</span>
        <h4 className='tarjeta-detail'>$ {propPriceOffer(props.precio, props.offer)}</h4>
        

        {/* <span className='detail-price' style={stylePrice} >$ {itemPriceOffer(item.price, item.offer)}</span> */}

        <Link to={url}>
          <button className='tarjeta-btn'>
            ver más
          </button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default Tarjeta;