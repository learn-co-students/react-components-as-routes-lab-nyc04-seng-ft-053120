import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => { return (
        <div key={director.name}>
          <h1>{director.name}</h1>
          <ul>{director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>))}</ul>
        </div>
      )})}
    </div>
  );
}

export default Directors
