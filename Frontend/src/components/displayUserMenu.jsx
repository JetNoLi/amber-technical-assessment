import React from 'react';
import { Container } from 'react-bootstrap';
import DisplayUserCard from './displayUserCard';
import PaginateData from './paginateData';
//import '../styles/styles.css';

const DisplayUserMenu = props => {

  function generateTotalPages() {
    let pages = [];

    for (let i = 1; i < props.totalPages + 1; i++) {
      pages[i - 1] = i;
    }

    //console.log(props.totalPages)
    //console.log(pages)

    return pages;
  }


  function getCardData(user) {

    let userData = {
      name: "",
      age: 0,
      imgLink: "",
      country: ""
    }

    if (user.name) {

      userData = {
        name: user.name.title + " " + user.name.first + " " + user.name.last,
        age: user.dob.age,
        imgLink: user.picture.large,
        country: user.location.country
      }
    }

    return userData;

  }

  return (
    <React.Fragment>

      <Container className="headingDisplay centerTag" style={{ display: props.display }}>
        <h1>Users</h1>
      </Container>

      <Container className="cardContainer centerTag" style={{ display: props.display }} >
        {props.menu.map(user =>
          <DisplayUserCard
            handleUserSelect={props.handleUserSelect}
            url={props.url}
            id={user._id}
            key={user._id}
            {...getCardData(user)}
            handleDelete={props.handleDelete}
            
          />
        )}
      </Container>

      <Container style={{ display: props.display !== "none" ? "flex" : "none" }} className='mt-4 centerTag'>
        <PaginateData 
          currentPage={props.currentPage}
          totalPages={generateTotalPages(props.totalPages)}
          handlePageChange={props.handlePageChange}
        />
      </Container>

      <Container style={{ display: props.display }}>
        <h3> Information </h3>
        <Container>
          <ul>
            <li>Version: {props.info.version}</li>
            <li>Number Of Users: {props.info.results}</li>
            <li>Seed: {props.info.seed}</li>
            <li>Pages: {props.info.page}</li>
          </ul>
        </Container>
      </Container>

    </React.Fragment>
  );
}

export default DisplayUserMenu;