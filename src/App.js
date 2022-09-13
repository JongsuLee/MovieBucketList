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
    const movieId = Number(event.target.id);
    console.log(event.target);
    for (let movie of movies) {
      if (movie.id === movieId) setBuckets(buckets.add(movie));  
    }
    console.log(buckets.size)
  }

  // console.log(movieList[2]);
  return (
    <div className="App">
      {/* MovieList */}

      <MovieList movieList={movies} onClickHandler={onClickHandler}/>
      {/* BucketList */}
      {if (buckets.size > 0) {
        console.log(buckets.size);
      }}
      {buckets.map(bucket => {
        console.log(bucket)
        return (
          <div>
            <input type='checkbox'/>
            <label>{bucket.title}</label>
          </div>
        );
      })}
    </div>
  );
}

export default App;
