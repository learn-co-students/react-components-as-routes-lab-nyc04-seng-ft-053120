import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => {
        return (
          <div key={idx}>
            <h1>{director.name}</h1>
            <h2>Movies:</h2>
            <ul>
              {director.movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
