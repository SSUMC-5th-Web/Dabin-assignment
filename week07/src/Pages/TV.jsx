import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #22254b;
    font-family: sans-serif;
  }
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 40px 100px;
  width: 100%;
`;

const TvContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  padding: 5px;
  margin: 5px;
  width: 310px;
`;
const TvImg = styled.img`
  height: auto;
  width: 300px;
  display: block;
  margin: 0 auto;
`;
const TvContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

function TvItem({ item }) {
  const base_url = 'https://image.tmdb.org/t/p/w1280/';
  return (
    <TvContainer>
      <TvImg src={base_url + item.backdrop_path} alt={item.name} />
      <TvContents>
        <span style={{ fontWeight: 'bold' }}> 제목 : {item.name}</span>
        <span> 첫 방영일 : {item.first_air_date}</span>
        <span> 평점 : {item.vote_average} / 10</span>
      </TvContents>
    </TvContainer>
  );
}

function TV({ tvs }) {
  return (
    <div>
      <GlobalStyle />
      <AppContainer>
        {tvs.map(item => (
          <TvItem item={item} key={item.title} />
        ))}
      </AppContainer>
    </div>
  );
}

export default TV;
