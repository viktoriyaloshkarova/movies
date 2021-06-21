import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div  className = 'col'>
            <h1 
            style = {{fontWeight: 'bold', fontSize: '50px'}} className = 'heading'
            >{props.heading}</h1>
        </div>
    );
};

export default Header;
