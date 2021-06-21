import React, { useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Pagination from './components/Pagination';
import Popup from './components/Popup';
import Movie from './components/Movie';
import backgroung from './film.jpg'


export const App = () => {

    const [movies, setMovies] = useState([]);

    const [released, setReleased] = useState('');

    const [runtime, setRuntime] = useState('');

    const [genre, setGenre] = useState('');

    const [director, setDirector] = useState('');

    const [plot, setPlot] = useState('');

    const [search, setSearch] = useState('');

    const [idSearch, setIdSearch] = useState('');

    const [currentPage, setCurrectPage] = useState(1);

    const [moviesPerPage, setMoviesPerPage] = useState(10);

    const paginate = (pageNumber) => setCurrectPage(pageNumber);

    const loadMore = () => {
        setMoviesPerPage(moviesPerPage + 5);
    }

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
    const idRequest = async (idSearch) => {
        const idurl = `http://www.omdbapi.com/?i=${idSearch}&apikey=bf2f4a04`;
        const response = await fetch(idurl);
        const responseJson = await response.json();

        

        if(responseJson.Released){
            setReleased(responseJson.Released)
        }
        
        if(responseJson.Runtime){
            setRuntime(responseJson.Runtime)
        }

        if(responseJson.Genre){
            setGenre(responseJson.Genre)
        }

        if(responseJson.Director){
            setDirector(responseJson.Director)
        }

        if(responseJson.Plot){
            setPlot(responseJson.Plot)
        }


    };

    useEffect(() => {
        idRequest(idSearch);
    }, [idSearch]);



    const lastMovieIndex = currentPage * moviesPerPage;
    const firstMovieIndex = lastMovieIndex - moviesPerPage;
    const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);

    return (
        <div style = {{backgroundImage: `url(${backgroung})`}}
        className = 'movie-app'>
            <div className = 'row d-flex mt-5 mb-5'>
                <Header heading = 'Movies'/>
                <Searchbar search = {search} setSearch = {setSearch}/>
                
            </div>
            <div className = 'vertical'>
                
                <section className = 'movies'>
                {currentMovies.map(movie => (
                
                    <div>
                    <Movie 
                    movie = {movie} 
                    released = {released}
                    runtime = {runtime}
                    genre = {genre}
                    director = {director}
                    plot = {plot}
                    idSearch = {idSearch}
                    setIdSearch = {setIdSearch}
                    />
                    
                </div>
            
            ))}

            <button className = 'btn btn-dark d-block'
                onClick = {() => loadMore()}
            >Load More</button>
            <br></br>

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