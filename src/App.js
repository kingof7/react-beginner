import React from 'react';
import Movie from './components/Movie';


function App() {
  const movies = [ //array
    { title: 'kossie coder1', year: 2001 }, //object
    { title: 'kossie coder2', year: 2003 },
    { title: 'kossie coder3', year: 2005 },
    { title: 'kossie coder4', year: 2010 },
  ];

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
    );
  }); //map을 쓰면 array에서 아이템 하나하나 가져옴

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
