import React from 'react'

const Movie = (props) => {
 
  

    return (
    <>
     {props.movies.map((movie, index)=>{
       <div className='image-container d-flex justify-content-start m-3'>
       <img src={movie.Poster} ></img>
       </div>
     })}
    </>
  )
}

export default Movie