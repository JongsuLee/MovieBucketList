import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* MovieList */}
      <MovieList />
      {/* BucketList
      <BucketList /> */}
    </div>
  );
}

export default App;
