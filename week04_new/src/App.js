import { movies } from "./movieDummy.js";
import Movie from "./Components/Movie.jsx";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppContainer>
        {movies.results.map((item) => {
          return (
            <Movie
              key={item.id}
              poster_path={item.poster_path}
              title={item.title}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </AppContainer>
    </div>
  );
}

export default App;
