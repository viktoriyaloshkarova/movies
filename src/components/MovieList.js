import React from 'react';
import Popup from './Popup';
import Movie from './Movie'

function MovieList ({ movies, setId }) {
    
    return (
        <section className = 'movies'>
            {movies.map(movie => (
                <Movie key = {movie.imdbID} movie = {movie} setId = {setId} />
            ))}

        </section>
    )
}

export default MovieList;