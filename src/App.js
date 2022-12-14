import {useEffect, useState} from 'react';
import './App.css';
import requests from './request';
import MovieList from './components/MovieList/MovieList';
import BucketList from './components/BucketList/BucketList';

const movieArray = [];

function App() {
  const [movies, setMovies] = useState([]);
  const [bucketSet, setBucketSet] = useState(new Set([]));
  const [buckets, setBuckets] = useState([]);
  
  const url = 'https://api.themoviedb.org/3';
  useEffect(() => {
    async function getMoives() {
      const response = await fetch(`${url}${requests.fetchTrending}`);  
      const movieList = await response.json();
      setMovies(movieList.results);
      console.log(bucketSet);
      setBuckets([...bucketSet]);
    }
    getMoives();
  }, [bucketSet]);
  
  const onClickHandler = (id) => {
    const movieId = Number(id);
    for (let movie of movies) {
      if (movie.id === movieId) {
        const str = JSON.stringify(movie);
        setBucketSet(new Set([...bucketSet, str]));
      }  
    }
  }
  
  const title = 'pickIt \n';
  const subtitle = 'Pick Your Bucket';

  return (
    <div className="App">
      <div className="Logo">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {/* MovieList */}
      <MovieList movieList={movies} onClickHandler={onClickHandler}/>
      {/* BucketList */}
      <BucketList bucketList={buckets}/>
    </div>
  );
}

export default App;
