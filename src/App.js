import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie 
        movie={movie}
        key={movie.id}
        removeMovie={removeMovie}
      />
    );
  }) : '영화 목록이 없습니다.' //map을 쓰면 array에서 아이템 하나하나 가져옴
  const addMovie = (movie) => {    
    setMovies([
      ...movies,
      movie
    ]);
  };
  return (
    <div className="App">
      <Navbar />
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />      
      {renderMovies}
    </div>
  );
}

export default App;
