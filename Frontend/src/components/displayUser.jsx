import React, {useState} from 'react';
import {Container, Row, Col, Button, Image, Card, Nav} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../styles/styles.css';

const DisplayUser = (props) => {
  const {user, display} = props;
  const [tab, setTab] = useState("personal");

  function selectTab(choice){
    setTab(choice);
  }

  function chooseTab(choice){
    
    switch(choice){
      case "personal": 
        return choosePersonal()

      case "account": 
        return chooseAccount()

      case "location": 
        return chooseLocation()
      
    }
  }

  function choosePersonal(){
    return(
      <>
        <Card.Title> Personal Info</Card.Title>
        <Card.Subtitle className = 'mb-1' > {user.name.title + " " + user.name.first + " " + user.name.last} </Card.Subtitle>
        <Card.Text className = 'normalFont mb-1'>Gender: {user.gender}</Card.Text>
        <Card.Text className = 'normalFont mb-1'>Cell: {user.cell}</Card.Text>
        <Card.Text className = 'normalFont mb-1'>ID: {user.ID.name + " : " + user.ID.value}</Card.Text>              
        <Card.Text className = 'normalFont mb-1'>Phone: {user.phone}</Card.Text>
        <Card.Text className = 'normalFont mb-1'>Cell: {user.cell}</Card.Text>
        <Card.Text className = 'normalFont mb-1'>nat: {user.nat}</Card.Text>
        <Card.Text className = 'smallFont mb-1'>Born: {user.dob.date}</Card.Text>        
      </>
    );
  }

  function chooseAccount(){
    return (
      <>
      <Card.Title> Account Info</Card.Title>
      <Card.Subtitle className = 'mb-1' > {user.email} </Card.Subtitle>
      <Card.Text className = 'normalFont mb-1'>Username: {user.login.username}</Card.Text>
      <Card.Text className = 'normalFont mb-1'>Password: {user.login.password}</Card.Text>
      <Card.Text className = 'normalFont mb-1'>Registered: {user.registered.date}</Card.Text>              
      <Card.Text className = 'normalFont mb-1'>Been a Member for {user.registered.age +" years"}</Card.Text>
      <Card.Text className = 'smallFont mb-1'>Salt: {user.login.salt}</Card.Text>
      <Card.Text className = 'smallFont mb-1'>md5: {user.login.md5}</Card.Text>
      <Card.Text className = 'smallFont mb-1'>sha1: {user.login.sha1}</Card.Text>        
      <Card.Text className = 'smallFont mb-1'>sha256: {user.login.sha256}</Card.Text>
    </>
    );
  }

  function chooseLocation(){
    return(
      <>
      <Card.Title> Location Info</Card.Title>
        <Card.Subtitle className = 'mb-1' > {user.location.state + ", " + user.location.country} </Card.Subtitle>
        <Card.Text className = 'normalFont mb-1'>Address: {user.location.city + " " + user.location.street.name + " " + user.location.street.number}</Card.Text>
        <Card.Text className = 'normalFont mb-1'>Post Code: {user.location.postcode}</Card.Text>
        <Card.Text className = 'normalFont mb-1'>Coordinates: {user.location.coordinates.latitude + " , " + user.location.coordinates.longitude}</Card.Text>
        <Card.Text className = 'normalFont mb-1'>Time Zone ({user.location.timezone.offset}): {user.location.timezone.description}</Card.Text>              
      </>
    );
  }

  function getUserDisplay(){
    if (user.name === undefined){
      return;
    } 

    return(
      <Container style = {{display: display}} className = 'userDisplayContainer'>
        <Row className = 'centerTag'>
          <h1>User Display</h1>
        </Row>

        <Row className = 'centerTag' >
          <Col className = 'centerTag userDisplayCard'>
            <Card className = 'userDisplayCard'>
              <Card.Header>
                <Nav variant = 'tabs' defaultActiveKey = {'#' + tab}>
                  <Nav.Item ><Nav.Link onClick = {() => selectTab("personal")} href = "#personal">Personal</Nav.Link></Nav.Item>
                  <Nav.Item ><Nav.Link onClick = {() => selectTab("account")} href = "#account">Account</Nav.Link></Nav.Item>
                  <Nav.Item ><Nav.Link onClick = {() => selectTab("location")} href = "#location">Location</Nav.Link></Nav.Item>
                </Nav>
              </Card.Header>
              
              <Card.Body>
                <Container>
                  <Row>
                    
                    <Col xs = {7}>
                      {chooseTab(tab)}
                    </Col>
                    
                    <Col xs = {4}>
                      <Container className = 'pictureDisplay'>
                        <Container className = ' pic '><Image roundedCircle src = {user.picture !== undefined ? user.picture.large : ""}/> </Container>
                        <Container className = 'pic'><Image roundedCircle src = {user.picture !== undefined ? user.picture.medium : ""}/></Container>
                        <Container className = 'pic'><Image roundedCircle src = {user.picture !== undefined ? user.picture.thumbnail : ""}/></Container>
                      </Container>
                    </Col>

                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className = 'backButton m-5 pb-3'>
          <Button onClick = {props.goBack}>View All Users</Button>
        </Row>

      </Container>
    );
  }

  return ( 
    <div>
     {getUserDisplay()}
    </div>
  );
}
 
export default DisplayUser;