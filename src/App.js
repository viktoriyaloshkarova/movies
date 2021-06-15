import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


export const App = () => {
    const [movies, setMovies] = useState([]);

    const movieRequest = async () => {
        const url = 'http://www.omdbapi.com/?s=star wars&apikey=bf2f4a04'
        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setMovies(responseJson.Search);
    };

    useEffect(() => {
        movieRequest();
    }, []);

    return (
        <div className = 'container-fluid movie-app'>
            <div className = 'vertical'>
                <MovieList movies={movies} />
            </div> 
        </div>
    );
};

export default App;


