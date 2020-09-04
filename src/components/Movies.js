import React from 'react';
import { movies } from '../data';



const Movies = () => {
  // console.log(movies)
  // let renderTitle = movies.map((movie, index) => {
  //   return (
  //     <div key={index}>
  //         <h3>{movie.title}</h3> 
  //           <ul>
  //             {movie.genres.map((g, index)=> <li key={index}>{g}</li>)}
  //           </ul>
  //       </div>
  //   )
  //     })

  // let renderMovie = movies.map(movie => movie.genres.map(g => <l1>{g}</ul>))

  // console.log(renderTitle)

  return (
    <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => (
        <div key={index}>
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
                {movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    ))}
  </div>
  );
};

export default Movies;
