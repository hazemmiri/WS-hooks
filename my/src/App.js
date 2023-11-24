import { useState } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { MovieData } from './components/MovieData';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';




function App() {
  const [movies , setMovies] = useState(MovieData)
  const [searchTitle ,setSearchTitle ] = useState("")
  
  console.log(searchTitle)
    const addMovie = (newMovie)=>{
      setMovies([...movies , newMovie])
    }
  return (
    <div>
      <AppNavbar setSearchTitle={setSearchTitle} />
      <AddMovie  AddMovie={AddMovie}  />
      <MovieList movies={movies} searchTitle={searchTitle} />
    </div>
  );
}

export default App;
