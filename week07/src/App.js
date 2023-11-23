import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Pages/Home.jsx';
import Celebrity from './Pages/Celebrity.jsx';
import Movies from './Pages/Movies.jsx';
import movies from './movieDummy';
import MovieDetail from './Pages/MovieDetail.jsx';
import TV from './Pages/TV.jsx';
import NotFound from './Pages/NotFound.jsx';
import Login from './Pages/Login.jsx';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movies" element={<Movies movies={movies.results} />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
