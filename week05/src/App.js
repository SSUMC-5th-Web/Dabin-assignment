import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Celebrity from './Pages/Celebrity.jsx';
import Home from './Pages/Home.jsx';
import Movies from './Pages/Movies.jsx';
import NotFound from './Pages/NotFound.jsx';
import TV from './Pages/TV.jsx';
import Header from './Components/Header.jsx';
import movies from './movieDummy';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movies" element={<Movies movies={movies.results} />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
