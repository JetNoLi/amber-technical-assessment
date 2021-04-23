import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap'; 
import axios from 'axios';
//import '../styles/styles.css';

const MakeRequest = (props) => {

  async function makeCall(){
    try{
      console.log(props.url + props.route)
      const res = await axios[props.method](props.url + props.route);
      props.handleResponse(res, props.id);
    }
    catch(error){
      console.log(error);
    } 
  }

  return ( 
    <Container>
      <Row>
        <Col className = {props.containerStyle}>
          <Button onClick = {makeCall} className = {"mt-2 " + props.classStyle} > {props.name}</Button>
        </Col>
      </Row>
    </Container>      
   
        
 );
}
 
export default MakeRequest;