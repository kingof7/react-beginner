import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([ //array
    { title: 'kossie coder1', year: 2001 }, //object
    { title: 'kossie coder2', year: 2003 },
    { title: 'kossie coder3', year: 2005 },
    { title: 'kossie coder4', year: 2010 },
  ]);

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
    );
  }); //map을 쓰면 array에서 아이템 하나하나 가져옴
  const addMovie = (movie) => {    
    setMovies([
      ...movies,
      movie
    ]);
  };
  return (
    <div className="App">
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />      
      {renderMovies}
    </div>
  );
}

export default App;
