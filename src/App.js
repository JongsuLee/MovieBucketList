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

  const onClickHandler = (id) => {
    const movieId = Number(id);
    for (let movie of movies) {
      if (movie.id === movieId) setBuckets(buckets.add(movie));  
    }
    console.log(buckets);
  }


  return (
    <div className="App">
      {/* MovieList */}
      <MovieList movieList={movies} onClickHandler={onClickHandler}/>
      {/* BucketList */}
    </div>
  );
}

export default App;
