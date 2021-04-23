import React from 'react';
import {Pagination} from 'react-bootstrap';

const PaginateData = ({currentPage, totalPages, handlePageChange }) => {
  //props -> totalPages / currentPage / data

  function isActive(page){
    
    if (page === currentPage){
      return {
        active:true
      }
    }

    return {active: false};
  }

  return ( 
    <Pagination className = 'paginationContainer'>
      <Pagination.Prev onClick = {()=> handlePageChange(currentPage-1 > 0 ? currentPage-1 : currentPage)}/>

      {totalPages.map(page => 
          <Pagination.Item onClick = {() => handlePageChange(page)} {...isActive(page)} key = {page} >{page}</Pagination.Item>
      )}

      <Pagination.Next onClick = { ()=> handlePageChange(currentPage+1 <= totalPages.length ? currentPage+1 : currentPage)}/>
    </Pagination>
   );
}
 
export default PaginateData;