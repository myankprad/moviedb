import React from 'react'
import styled from 'styled-components';


const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;


const Movie = ({Poster, Title, Year, Type, imdbID, props}) => {
  return (
    <>
    <MovieContainer onClick={()=>props.onMovieSelect(imdbID)}>
    <CoverImage src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"/>
   <MovieName>Avengers: Endgame</MovieName>
   <InfoColumn>
    <MovieInfo>Year: 2019</MovieInfo>
    <MovieInfo>Type: movie</MovieInfo>

   </InfoColumn>
    </MovieContainer>

    <MovieContainer onClick={()=>props.onMovieSelect(imdbID)}>
    <CoverImage src="https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg"/>
   <MovieName>Pirates of the Caribbean: Dead Men Tell No Tales</MovieName>
   <InfoColumn>
    <MovieInfo>Year: 2017</MovieInfo>
    <MovieInfo>Type: movie</MovieInfo>

   </InfoColumn>
    </MovieContainer>
    <MovieContainer onClick={()=>props.onMovieSelect(imdbID)}>
    <CoverImage src="https://m.media-amazon.com/images/M/MV5BZTI2Yzc1MTctMTIzOS00ZDljLTkzMDgtZDdiMWJiZWMxNjU2XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"/>
   <MovieName>Dragon Ball Z</MovieName>
   <InfoColumn>
    <MovieInfo>Year: 1989–1996</MovieInfo>
    <MovieInfo>Type: series</MovieInfo>

   </InfoColumn>
    </MovieContainer>

    <MovieContainer onClick={()=>props.onMovieSelect(imdbID)}>
    <CoverImage src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"/>
   <MovieName>John Wick</MovieName>
   <InfoColumn>
    <MovieInfo>Year: 2014</MovieInfo>
    <MovieInfo>Type: movie</MovieInfo>

   </InfoColumn>
    </MovieContainer>


    
    </>
  )
}

export default Movie