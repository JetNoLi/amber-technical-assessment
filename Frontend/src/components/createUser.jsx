import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Col, Form, Container, Row, Image} from 'react-bootstrap';


const CreateUser = props => {


  function handleSubmit(){
    console.log(this.personalInfo);
    //const val = ReactDOM.findDOMNode(formRef);
    //console.log(val);
    //setData(formValues)
    alert("hi");
  }

  return ( 
    <Form onSubmit = {handleSubmit}>
        <Form.Row>
        <Form.Group as={Col} controlId = "personalInfo" ref = {input => this.personalInfo = input}>
          <Form.Label className = 'centerTag'>Personal Info</Form.Label>
          <Form.Control type = "name"/>
        </Form.Group>

        <Form.Group as = {Col}>
          <Form.Label className = 'centerTag'>User Info</Form.Label>
          <Form.Control placeholder = "thumbnail"/>
          <Form.Control placeholder = "medium"/>
          <Form.Control placeholder = "large"/>
        </Form.Group>

        
      </Form.Row>

      <Form.Row>
        <Container>
          <Row>
            <Col className = 'centerTag'><Image></Image></Col>
            <Col className = 'centerTag'><Image></Image></Col>
            <Col className = 'centerTag'><Image></Image></Col>
          </Row>
        </Container>
        <Form.Group as = {Col}>
          <Form.Label className = 'centerTag'>Picture Selection</Form.Label>
          <Form.Control placeholder = "thumbnail"/>
          <Form.Control placeholder = "medium"/>
          <Form.Control placeholder = "large"/>
      </Form.Group>
      </Form.Row>
      
      <Form.Row className = 'centerTag'>
        <Form.Group controlId = "locationInfo">
          <Form.Label className = 'centerTag'>Location Data</Form.Label>
          <Form.Control placeholder = "Locale"/>
        </Form.Group>
      </Form.Row>

      <input type = 'submit' value = "Submit" ref={input => this.value}/>
      
    </Form>
   );
}
 
export default CreateUser;