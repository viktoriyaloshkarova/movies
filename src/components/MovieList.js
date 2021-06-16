import React from 'react';

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index)=> (
            <div className = 'movie'>
                <h2 className = 'title'>{movie.Title} </h2>
                <h3 className = 'year'>{movie.Year}</h3>
                
            
                <div className = 'poster'>
                    <img src={movie.Poster} alt = 'movie'></img>
                </div>
            </div>
        ))}
        </>
    )
}

export default MovieList;