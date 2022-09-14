import React from 'react'
import Movie from './Movie';

const MovieList = (props) => {
  const movieList = props.movieList;

  return (
    movieList.map(movie => {
      return (
        <Movie object={movie}/>
      );
    })
  );
}

export default MovieList