import React from 'react';
import Popup from './Popup';
import { useState, useEffect } from 'react';
import './Movie.css';

const Movie = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
    
        <div >
            <main>
            <button 
                look='clear'
                className = 'button'
                onClick={ () => {setButtonPopup(true); 
                props.setIdSearch(props.movie.imdbID)}}>
                {props.movie.Title}</button>
                <br></br>
            </main>
            <Popup style = {{fontWeight: 'bold'}} trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                <h3>Movie info: </h3>
                <br></br>
                <h5>{props.plot}</h5>
                <p>Released: {props.released}</p>
                <p>Runtime: {props.runtime}</p>
                <p>Genre: {props.genre}</p>
                <p>Director: {props.director}</p>
               </Popup>
            <div className = 'poster'>
            <img src = {props.movie.Poster} alt = 'movie'></img>
</div>
            
            
            
        </div>
    )
}

export default Movie;