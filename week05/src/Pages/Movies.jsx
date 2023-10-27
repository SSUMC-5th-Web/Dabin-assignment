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

function Movies({ movies }) {
  // 각 영화 정보에 대한 상태 배열 초기화
  const [showOverviewArray, setShowOverviewArray] = useState(new Array(movies.length).fill(false));

  const handleMouseEnter = index => {
    // 해당 영화 정보에 대한 마우스 오버 상태를 활성화
    const newShowOverviewArray = [...showOverviewArray];
    newShowOverviewArray[index] = true;
    setShowOverviewArray(newShowOverviewArray);
  };

  const handleMouseLeave = index => {
    // 해당 영화 정보에 대한 마우스 오버 상태를 비활성화
    const newShowOverviewArray = [...showOverviewArray];
    newShowOverviewArray[index] = false;
    setShowOverviewArray(newShowOverviewArray);
  };

  return (
    <div>
      <GlobalStyle />
      <AppContainer>
        {movies.map((movie, index) => (
          <A.movieContainer
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}>
            <A.movieImg src={movie.poster_path} alt={movie.title} />

            <A.movieInfo>
              <h4 style={{ margin: '0' }}>{movie.title}</h4>
              <span style={{ marginLeft: '5px' }}>{movie.vote_average}</span>
            </A.movieInfo>

            {showOverviewArray[index] && (
              <A.movieDetail>
                <h4>{movie.title}</h4>
                <span>{movie.overview}</span>
              </A.movieDetail>
            )}
          </A.movieContainer>
        ))}
      </AppContainer>
    </div>
  );
}

export default Movies;
