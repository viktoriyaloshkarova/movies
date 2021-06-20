import React from 'react';
import Popup from './Popup';
import { useState, useEffect } from 'react';

const Movie = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
    
        <div className = 'movie'>
            <main>
            <button onClick={
                () => setButtonPopup(true)
                }>
                {props.movie.imdbID}</button>
            </main>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                <h3>{props.movie.Title}</h3>
                <p>Released: {props.id}</p>
               </Popup>
            <div className = 'poster'>
            <img src = {props.movie.Poster} alt = 'movie'></img>
</div>
            
            
            
        </div>
    )
}

export default Movie;