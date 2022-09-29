import React from 'react';
import Card from 'react-bootstrap/Card';
import "./tarjeta.css";
import { Link } from 'react-router-dom';


function Tarjeta(props) {

  const url = `/producto/${props.id}`
  
  return (
    <div>
    <Card style={{ width: '19rem' }} className="tarjeta">
      <Card.Img style={{ paddingTop: '15px', paddingBottom:'10px' }} variant="top" className='tarjeta-img' src={props.img} />
      <Card.Body className="tarjeta-detalle">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <h4>$ {props.precio}</h4>
        <Link to={url}>
          <button>
            ver más
          </button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default Tarjeta;