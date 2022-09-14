import {useEffect, useState} from 'react';
import './App.css';
import requests from './request';
import MovieList from './components/MovieList/MovieList';
import BucketList from './components/BucketList/BucketList';

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
    }
    getMoives();
  }, []);

  const onClickHandler = (id) => {
    const movieId = Number(id);
    for (let movie of movies) {
      if (movie.id === movieId) {
        setBucketSet(new Set([...bucketSet, movie]));
        console.log(bucketSet, 'bs');
      }  
    }
    console.log(buckets, 'buckets');
    setBuckets([...bucketSet]);
  }
  

  return (
    <div className="App">
      {/* MovieList */}
      <MovieList movieList={movies} onClickHandler={onClickHandler}/>
      {/* BucketList */}
      <BucketList bucketList={buckets}/>
    </div>
  );
}

export default App;
