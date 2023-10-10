import React from "react";

function Movie({ poster_path, title, vote_average }) {
  return (
    <div>
      <div className="movie-container">
        <img src={poster_path} alt="영화포스터" />
        <div className="movie-info">
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
