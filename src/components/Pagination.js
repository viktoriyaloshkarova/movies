import React from 'react';
import './Popup.css'

const Pagination = ({moviesPerPage, totalMovies, paginate}) => {

    const pageNumbers = [];

    //Creating a stack frame based on how many pages are needed
    for(let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++){
        pageNumbers.push(i);
    }
    return(

        <nav>
            <ul className = 'pagination'> {pageNumbers.map(number => (
                <li key = {number} className = 'page-item'>
                    <a 
                    onClick = {() => paginate(number)}
                    href = '!#' 
                    className = 'btn btn-dark d-block'>
                        {number}
                    </a>
                </li>
            ))}
            </ul>
            
        </nav>
    )
} 

export default Pagination;