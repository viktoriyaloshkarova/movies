import React from 'react';
import Popup from './Popup';
import Movie from './Movie'

function MovieList ({ results }) {
    
    return (
        <section className = 'movies'>
            {MovieList.map(movie => (
                <Movie movie = {movie}/>
            ))}

        </section>
    )
}

export default MovieList;