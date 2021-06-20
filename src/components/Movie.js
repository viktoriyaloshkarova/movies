import React from 'react';
import Popup from './Popup';
import { useState, useEffect } from 'react';
import './Movie.css';

const Movie = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
    
        <div >
            <main>
            <button className = 'button'
                
            onClick={ () => {setButtonPopup(true); props.setIdSearch(props.movie.imdbID)}
                }>
                {props.movie.Title}</button>
                <br></br>
            </main>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                <h2>Movie info: </h2>
                <br></br>
                <p>{props.plot}</p>
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