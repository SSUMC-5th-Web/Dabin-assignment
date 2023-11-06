import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import * as A from './Movies.style.jsx';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #22254b;
    font-family: sans-serif;
  }
`;
export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Movies({ posterPath, title, voteAverage, overview }) {
  const [detail, setDetail] = useState(false);

  const showDetail = () => {
    setDetail(true);
  };
  const hideDetail = () => {
    setDetail(false);
  };

  return (
    <div>
      <GlobalStyle />
      <AppContainer>
        <A.movieContainer onMouseEnter={showDetail} onMouseLeave={hideDetail}>
          <A.movieImg src={posterPath} alt={title} />

          <A.movieInfo>
            <h4 style={{ margin: '0' }}>{title}</h4>
            <span style={{ marginLeft: '5px' }}>{voteAverage}</span>
          </A.movieInfo>

          {detail && (
            <A.movieDetail>
              <h4>{title}</h4>
              <span>{overview}</span>
            </A.movieDetail>
          )}
        </A.movieContainer>
      </AppContainer>
    </div>
  );
}

export default Movies;
