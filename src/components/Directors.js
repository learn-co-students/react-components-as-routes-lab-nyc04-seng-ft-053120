import React from 'react';
import { directors } from '../data';
import { render } from 'enzyme';

const Directors = () => {
  function renderDirectors() {
    return directors.map(director => (
      <div>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    ))
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
