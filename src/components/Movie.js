import React from 'react'
import './Movie.css'


const Movie = (props) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const movie = props.object;
  const onClickHandler = props.onClickHandler;

  return (
    <div className='movie' onClick={onClickHandler}>
        {/* poster */}
        <div className='poster-frame'>
          <img className='poster' id={movie.id} src={`${baseUrl}${movie.poster_path}`}/>
        </div>
        {/* title(ko + en) */}
        <div className='title'>
          <div className='title-ko'>{movie?.title || movie?.name}</div>
          <div className='title-en'>{movie?.original_title || movie?.original_name}</div>
        </div>
        {/* release date */}
        <div className='release-date'>{movie?.release_date || movie?.first_air_date}</div>
    </div>
  )
}

export default Movie