import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([])
 
  const getMovieRequest = async () =>{
    const url = "http://www.omdbapi.com/?s=avtar&apikey=66a38003"

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
     <Movie movies={movies} />
     </div>
    </div>
  );
}

export default App;
