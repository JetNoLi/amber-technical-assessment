import React, { Component } from 'react';
import 'react-bootstrap/dist/react-bootstrap';
//import '../styles/styles.css';
//import 'bootstrap/dist/css/bootstrap.css';
import MakeRequest from './makeRequest';
import { Container, Row, Col, Button, Image ,Card} from 'react-bootstrap';

const DisplayUserCard = (props) => {
  
  return ( 
  <Card className = 'card m-3' >
  <div className=" container selectableHover" href = "#" onClick = {() => props.handleUserSelect(props.id)}>
    <Card.Img variant="top"  src={props.imgLink} />
  </div>
  
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      <span className = "cardText">Age: {props.age}</span>
      <span className = "cardText">Country: {props.country}</span>
    </Card.Text>
    <br/>
    
    <MakeRequest
      route = {'/' + props.id}
      method = {'delete'}
      name = {"Delete"}
      handleResponse = {props.handleDelete} 
      containerStyle = {"cardButton"}
      cardStyle = {""}  
      url = {props.url}
      id = {props.id}
    />
    
   
  </Card.Body>
</Card>
  );
}
 
export default DisplayUserCard;