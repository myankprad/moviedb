import React from 'react'

const MovieList = (props) => {
    return (
    <>
    {props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img className='d-flex' src={movie.Poster} alt='movie'/>
				</div>
			))}
    
    </>
  )
}

export default MovieList