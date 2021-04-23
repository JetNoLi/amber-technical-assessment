import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

// Custom Components
import MakeRequest from './makeRequest';
import DisplayUserMenu from './displayUserMenu'
import DisplayUser from './displayUser';

//Styles
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

const DisplayContainer = () => {

  const [display, setDisplay] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const url = "http://localhost:8000/users";
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  
  function goBack(){
    setDisplay("flex");
  }

  function handleUserSelect(id){
    setCurrentUser(data.find(user => user._id === id));
    console.log(currentUser);
    setDisplay("none");
  }

  function handleResponse(response){
    setDisplay("flex")
    //console.log(response);
    setData(response.data.results);
    //console.log(data);
    setInfo(response.data.info);

  }

  function handlePageChange(page){
    setCurrentPage(page);
  }

  function handleDelete(res,key){
    console.log(key)
    setData(data.filter(user => user._id !== key));
    setInfo({...info, results : info.results -1});
    console.log( data.length + " pg = " + currentPage);
    if (!(data.length-1 > (currentPage-1) * 4)){
      console.log(currentPage + " Here");
      setCurrentPage(currentPage -1);
    }
  }

  function paginate(){
    const totalPages = Math.ceil(data.length/4);
    const indexStart = (currentPage-1)*4;
    const indexEnd = (indexStart + 4) <= data.length ? indexStart + 4 : data.length;
    
    const users = data.slice(indexStart,indexEnd);
    
    //console.log(users)
    const paginateProps = {
      menu: users,
      totalPages: totalPages,
      currentPage: currentPage,
      indexStart: indexStart,
      indexend:indexEnd
    }
    
    //console.log(paginateProps);

    return paginateProps;
  }


  return ( 
    <>
      <Container className = "displayContainer" >
        <Container>
          <h3 className = 'centerTag'>Click Me to Fetch Users</h3>
          <MakeRequest
            url = {url}
            handleResponse = {handleResponse}
            route = ''
            method = {'get'}
            name = {"call API"}
            classStyle = {"btn btn-warning"}
            containerStyle = {"centerTag mb-4"}
          />
        </Container>
        

        <DisplayUserMenu
          handleUserSelect = {handleUserSelect}
          display = {display}
          {...paginate()}
          handlePageChange = {handlePageChange}
          handleDelete = {handleDelete}
          url = {url}
          info = {info}
        />


      </Container>
      <DisplayUser
        user = {currentUser}
        display = {currentUser.picture !== undefined && display === "none" ? "" : "none"}
        goBack = {goBack}
      />  
  </>
  );
}
 
export default DisplayContainer;