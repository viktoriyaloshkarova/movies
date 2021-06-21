import React from 'react';

const Searchbar = (props) => {
    return(
        <div className = 'col col-sm-4'>
            <input 
            className = 'form-control' 
            value = {props.value} 
            //anytime a use types, which is a change, the search will generate based on user's phrase
            onChange = {(event) => props.setSearch(event.target.value)}
            placeholder = 'Search...'></input>
        </div>
    );
};

export default Searchbar;