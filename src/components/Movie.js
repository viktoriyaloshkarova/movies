import React from 'react';

function Movie ({ movie, setId}){
    return (
        <div className = 'movie' onClick = {() => setId(movie.imdbID)}>
            <h3>{movie.Title}</h3>
            <img src = {movie.Poster} alt = 'movie'></img>
            <p>{movie.Released}</p>
        </div>
    )
}

export default Movie;