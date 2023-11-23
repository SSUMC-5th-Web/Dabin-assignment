import React from 'react';
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 100px;
  width: 100%;
`;

function TVItem({ item }) {
  const base_url = 'https://image.tmdb.org/t/p/w1280/';

  return (
    <A.movieContainer style={{ width: '300px' }}>
      <A.movieImg src={base_url + item.backdrop_path} alt={item.name} />
      <A.movieInfo>
        <h4 style={{ margin: '0' }}>{item.name}</h4>
        <span style={{ marginLeft: '5px' }}>{item.vote_average}</span>
      </A.movieInfo>
    </A.movieContainer>
  );
}

function TV({ tvs }) {
  return (
    <div>
      <GlobalStyle />
      <AppContainer>
        {tvs.map(item => (
          <TVItem item={item} key={item.name} /> // 각 TV 프로그램 항목을 TVItem 컴포넌트로 렌더링
        ))}
      </AppContainer>
    </div>
  );
}
export default TV;
