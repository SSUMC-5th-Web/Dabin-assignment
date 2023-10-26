import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Celebrity from './Components/Celebrity.jsx';
import Home from './Components/Home.jsx';
import Movies from './Components/Movies.jsx';
import NotFound from './Components/NotFound.jsx';
import TV from './Components/TV.jsx';
import Header from './Components/Header.jsx';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/TV" element={<TV />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
