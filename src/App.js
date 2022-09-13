import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';
import requests from './request';

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
    const movie = event.target;
    console.dir(movie);
  }

  // console.log(movieList[2]);
  return (
    <div className="App">
      {/* MovieList */}
        {movies.map(movie => {
          return (
            <div key={movie.id} onClick={onClickHandler}>
              <div>{movie.title}</div>
              <div>{movie.original_title}</div>
            </div>
          );
        })}
      {/* BucketList */}

    </div>
  );
}

export default App;
