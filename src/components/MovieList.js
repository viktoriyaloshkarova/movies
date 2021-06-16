import React from 'react';
import Popup from './Popup';
import { useState } from 'react';

const MovieList = (props) => {
    
    const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
        <>
        {props.movies.map((movie, index)=> (
            <div className = 'movie'>
                <main>
                <button onClick = {() => setButtonPopup(true)} className = 'title'>{movie.Title} </button>
                </main>

                <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <h3>{movie.Title}</h3>
                    <p>Release date: {movie.Released} </p>
                    <p> Runtime: {movie.Runtime}</p>
                    <p>Genre: </p>
                    <p>Director: {movie.Director}</p>
                </Popup>
                <br/><br/>
                <div className = 'poster'>
                    <img src={movie.Poster} alt = 'movie'></img>
                </div>
            </div>
        ))}
        </>
    )
}

export default MovieList;