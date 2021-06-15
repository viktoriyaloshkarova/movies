import React from 'react';

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index)=> (
            <div>
                <p src={movie.Title}> </p>
                <img src={movie.Poster} alt = 'movie'></img>
            </div>
        ))}
        </>
    )
}

export default MovieList;