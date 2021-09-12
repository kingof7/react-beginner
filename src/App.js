import React from 'react';

function App() {
  const movies = [ //array
    { title: 'kossie coder1', year: 2001 }, //object
    { title: 'kossie coder2', year: 2003 },
    { title: 'kossie coder3', year: 2005 },
    { title: 'kossie coder4', year: 2010 },
  ];

  const renderMovies = movies.map(movie => {
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  }); //map을 쓰면 array에서 아이템 하나하나 가져옴

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
      {/* <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div>
      <div className="movie">
        <div className="movie-title">{movies[1].title}</div>
        <div className="movie-year">{movies[1].year}</div>
      </div>
      <div className="movie">
        <div className="movie-title">{movies[2].title}</div>
        <div className="movie-year">{movies[2].year}</div>
      </div> */}
    </div>
  );
}

export default App;
