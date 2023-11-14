import { useNavigate } from 'react-router-dom';
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
`;

function MovieItem({ item }) {
  // 각 영화 항목을 관리하는 컴포넌트
  const navigate = useNavigate();
  const onClickImg = () => {
    navigate(`/movie/${item.title}`, {
      state: {
        posterPath: item.poster_path,
        title: item.title,
        voteAverage: item.vote_average,
        overview: item.overview,
      },
    });
  };

  return (
    <A.movieContainer>
      <A.movieImg src={item.poster_path} alt={item.title} onClick={onClickImg} />
      <A.movieInfo>
        <h4 style={{ margin: '0' }}>{item.title}</h4>
        <span style={{ marginLeft: '5px' }}>{item.vote_average}</span>
      </A.movieInfo>
    </A.movieContainer>
  );
}

function Movies({ movies }) {
  return (
    <div>
      <GlobalStyle />
      <AppContainer>
        {movies.map(item => (
          <MovieItem item={item} key={item.title} /> // 각 영화 항목을 MovieItem 컴포넌트로 렌더링
        ))}
      </AppContainer>
    </div>
  );
}
export default Movies;
