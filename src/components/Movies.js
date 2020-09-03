import React from 'react';
import { movies } from '../data';

const Movies = () => {

  function renderMovies() {
    return movies.map(movie => (
      <div>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map(genre => (<li key={genre}>{genre}</li>))}
        </ul>
      </div>
    ))
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
