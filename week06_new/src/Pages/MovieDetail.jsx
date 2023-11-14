import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div>
      <h2>{title}</h2>
      <img src={state.posterPath} alt={title} />
      <p>{state.overview}</p>
    </div>
  );
}

export default MovieDetail;
