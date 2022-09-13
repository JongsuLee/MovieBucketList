import axios from '../axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Movie.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Movie = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
        }

        fetchData();
        console.log(movies);
    }, []);

  return (
    <div className='movies'>
        {/* category title */}
        <h2>{props.title}</h2>
        {/* movie__posters */}
        <div className={'movie__posters'}>
            {movies.map((movie) => 
                <img
                    key={movie.id} 
                    className={`movie__poster ${props.isLarge && 'movie__posterLarge'}`}
                    // movie__poster movie__posterLarge
                    src={`${baseUrl}${props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    />
            )}
        </div>
    </div>
  )
}

export default Movie