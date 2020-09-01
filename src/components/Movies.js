import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => { return(
          <div key={movie.title}>
            <h1>{movie.title}</h1>
            <h3>{movie.time}</h3>
            <ul>{movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>))}
            </ul>
          </div>
        )})}
    </div>
  );
};

export default Movies;
