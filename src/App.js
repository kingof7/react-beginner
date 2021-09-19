import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from 'react-router-dom';

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
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/movies">
            <h1>Movie List</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
          </Route>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>        
          <Route path="/users">
            <h1>Users</h1>
          </Route>          
        </Switch>   
      </div>
    </Router>
  );
}

export default App;
