import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Pagination from './components/Pagination';
import Popup from './components/Popup';


export const App = () => {
    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('');

    const [currentPage, setCurrectPage] = useState(1);

    const [moviesPerPage] = useState(10);

    const paginate = (pageNumber) => setCurrectPage(pageNumber);

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


    const lastMovieIndex = currentPage * moviesPerPage;
    const firstMovieIndex = lastMovieIndex - moviesPerPage;
    const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);

    return (
        <div className = 'movie-app'>
            <div className = 'row d-flex mt-5 mb-5'>
                <Header heading = 'Movies'/>
                <Searchbar search = {search} setSearch = {setSearch}/>
            </div>
            <div className = 'vertical'>
                <MovieList movies={currentMovies} />
                <Pagination 
                    moviesPerPage = {moviesPerPage} 
                    totalMovies = {movies.length} 
                    paginate = {paginate}/>
            </div> 
        </div>
    );
};

export default App;


