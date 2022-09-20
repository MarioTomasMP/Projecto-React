import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Itemcount from '../itemCount/ItemCount';
import "./tarjeta.css";


function Tarjeta(props) {
  console.log(props)
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
        {/* <Button variant="primary" className='btn-verMas'><a href="#">ver más</a></Button> */}
      
        <Itemcount initial ={1} stock={5}/>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default Tarjeta;