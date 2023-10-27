import React from 'react';

function Movies({ movies }) {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <img src={movie.poster_path} alt={movie.title} />
          <h4>{movie.title}</h4>
          <span>{movie.vote_average}</span>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
