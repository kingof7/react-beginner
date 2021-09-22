import React, { useState } from 'react';
import MovieForm from '../components/MovieForm';
import Movie from '../components/Movie';

const Movies = () => {
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
        <>
            <h1>Movie List</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
        </>
    );
};

export default Movies;