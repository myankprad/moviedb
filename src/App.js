import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([])
 
  const getMovieRequest = async () =>{
    const url = "http://www.omdbapi.com/?s=avengers&apikey=66a38003"

    const response = await fetch(url);
     const responeJson = await response.json();
     console.log(responeJson)
     setMovies(responeJson.Search)
  }

   useEffect(()=>{
    getMovieRequest();
   }, [])
 
 
  return (
    <div className="container-fluid movie-app">
     <div className='row'>
     <MovieList movies={movies} />
     </div>
    </div>
  );
}

export default App;
