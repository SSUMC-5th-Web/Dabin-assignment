import { useState } from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogoutClick} onLogin={handleLoginClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movies" element={<Movies movies={movies.results} />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login onLogin={handleLoginClick} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
