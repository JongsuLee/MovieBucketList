import {useEffect, useState} from 'react';
import './App.css';
import requests from './request';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [buckets, setBuckets] = useState(new Set());

  const url = 'https://api.themoviedb.org/3';
  
  useEffect(() => {
    async function getMoives() {
      const response = await fetch(`${url}${requests.fetchTrending}`);  
      const movieList = await response.json();
      setMovies(movieList.results);
    }
    getMoives();
  }, []);

  const onClickHandler = (event) => {
    const movieId = Number(event.target.parentElement.id);
    for (let movie of movies) {
      if (movie.id === movieId) setBuckets(buckets.add(movie));  
    }
    console.log(buckets)
  }

  // console.log(movieList[2]);
  return (
    <div className="App">
      {/* MovieList */}
        {/* {movies.map(movie => {
          return (
            <div key={movie.id} onClick={onClickHandler} id={movie.id}>
              <div>{movie.title}</div>
              <div>{movie.original_title}</div>
            </div>
          );
        })} */}
      {/* BucketList */}

      <MovieList movieList={movies}/>
      {/* BucketList
      <BucketList /> */}
    </div>
  );
}

export default App;
