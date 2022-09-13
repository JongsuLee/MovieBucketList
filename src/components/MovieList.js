import React from 'react'
import Movie from './Movie';
import './MovieList.css';

const MovieList = (props) => {
  const movieList = props.movieList;
  const onClickHandler = props.onClickHandler;

  return (
    <div className='movie-list'>
      {movieList.map(movie => {
        return (
          <Movie key={movie.id} object={movie} onClickHandler={onClickHandler}/>
        );
      })}
    </div>
  );
}

export default MovieList