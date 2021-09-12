import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';


function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([ //array
    { title: 'kossie coder1', year: 2001 }, //object
    { title: 'kossie coder2', year: 2003 },
    { title: 'kossie coder3', year: 2005 },
    { title: 'kossie coder4', year: 2010 },
  ]);
  useEffect(()=>{
    console.log('render');

  });
  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
    );
  }); //map을 쓰면 array에서 아이템 하나하나 가져옴
  const addMovie = (event) => {
    event.preventDefault();
    setMovies([
      ...movies,
      {    
      title: movieTitle,
      year: movieYear,
      }
    ])
  };
  return (
    <div className="App">
      <h1>Movie list</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e => setMovieTitle(e.target.value)}
        /><br />
        <input
          type="text"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setMovieYear(e.target.value)}
        /><br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
