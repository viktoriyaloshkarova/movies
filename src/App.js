import React, { useEffect, useState } from 'react';
import MovieFetch from './components/MovieFetch';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Pagination from './components/Pagination';
import Popup from './components/Popup';
import Movie from './components/Movie';


export const App = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

    const [movies, setMovies] = useState([]);

    const [id, setId] = useState('');

    const [search, setSearch] = useState('');

    const [idsearch, setIdSearch] = useState('');

    const [currentPage, setCurrectPage] = useState(1);

    const [moviesPerPage] = useState(10);

    const paginate = (pageNumber) => setCurrectPage(pageNumber);

    //initial fetch request to get all possible movies from search
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


    //second request to get all details from a movie 
    const idRequest = async (idsearch) => {
        const idurl = `http://www.omdbapi.com/?i=${idsearch}&apikey=bf2f4a04`;
        const response = await fetch(idurl);
        const responseJson = await response.json();

        if(responseJson.Search){
            setId(responseJson.Search);

        }
        
    };

    useEffect(() => {
        idRequest(idsearch);
    }, [idsearch]);



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
                {//<MovieList movies={currentMovies} setIdSearch = {setIdSearch} setButtonPopup = {setButtonPopup}/>
}
                
                <section className = 'movies'>
                {movies.map(movie => (
                <div>
                    <div>
                    <MovieFetch
                    movie = {movie} 
                    setIdSearch = {setIdSearch}
                    />
                    </div>

                    <Movie 
                    movie = {movie} 
                    setIdSearch = {setIdSearch}
                    id = {id}
                    />
                    
                </div>
            
            ))}

        </section>
                
                <Pagination 
                    moviesPerPage = {moviesPerPage} 
                    totalMovies = {movies.length} 
                    paginate = {paginate}/>
                
            </div> 
        </div>
    );
};

export default App;