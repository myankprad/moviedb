import React, {useEffect, useState} from 'react';
import './App.css';
import styled from "styled-components"
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfo';
import axios from 'axios';
import Movie from './components/Movie';

export const API_KEY = "66a38003";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;


function App() { 

  const [searchQuery, setSearchQuery]= useState();
  const [timeoutId, setTimeoutId] = useState()
  const [movieList, setMovieList]= useState()
  const [selectedMovie, onMovieSelect] = useState();

 const fetchData =async (searchString)=>{
 const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
 console.log(response)
 setMovieList(response.data.Search)
 }
 
  const onTextChange= (event)=>{
    clearTimeout(timeoutId)
    setSearchQuery(event.target.value)
   const timeout = setTimeout(()=>fetchData(event.target.value),500)
    setTimeoutId(timeout)
  }

  return (
    <>
     <Container>
     <Header> 
     <AppName>
    <MovieImage src='/movie-icon.svg'/> 
     Movie Info
     </AppName>
     <SearchBox>
      <SearchIcon src='/search-icon.svg' />
      <SearchInput placeholder='Movie Name Here' onChange={onTextChange} value={searchQuery} />
     
     </SearchBox>
      </Header>
      {
        selectedMovie && <MovieInfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />
      }
      <MovieListContainer>
        {
          movieList?.length ? movieList.map((movie, index)=> <MovieList key={index} movie={movie} onMovieSelect={onMovieSelect} />) 
          :
            <Movie />
            
            
        }
        
        
        
      </MovieListContainer>
     </Container>
      
    </>
  );
}

export default App;

// const url = "http://www.omdbapi.com/?s=avengers&apikey=66a38003"
