import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Header from './components/Header'
import Searchbar from './components/Searchbar';


export const App = () => {
    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('');

    const movieRequest = async (search) => {
        const url = `http://www.omdbapi.com/?s=${search}&apikey=bf2f4a04`;
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search){
            setMovies(responseJson.Search);
        }
        
    };

    useEffect(() => {
        movieRequest(search);
    }, [search]);

    return (
        <div className = 'movie-app'>
            <div className = 'row d-flex mt-5 mb-5'>
                <Header heading = 'Movies'/>
                <Searchbar search = {search} setSearch = {setSearch}/>
            </div>
            <div className = 'vertical'>
                <MovieList movies={movies} />
            </div> 
        </div>
    );
};

export default App;


