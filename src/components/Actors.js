import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => {
        return (
          <div key={idx}>
            <h1>{actor.name}</h1>
            <h2>Movies:</h2>
            <ul>
              {actor.movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
