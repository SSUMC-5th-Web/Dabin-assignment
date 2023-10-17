import { movies } from "./movieDummy.js";
import Movie from "./Components/Movie";
import { GlobalStyle } from "./Components/Movie.style.jsx";
import { AppContainer } from "./Components/Movie.style.jsx";

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
