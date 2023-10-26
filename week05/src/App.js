import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Celebrity from './Components/Celebrity.jsx';
import Home from './Components/Home.jsx';
import Movies from './Components/Movies.jsx';
import NotFound from './Components/NotFound.jsx';
import TV from './Components/TV.jsx';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        {/* 라우팅에 영향을 받지 않는 header, Footer 등의 컴포넌트의 위치 */}
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/Celebrity" element={Celebrity} />
          <Route path="/Movies" element={Movies} />
          <Route path="/NotFound" element={NotFound} />
          <Route path="/TV" element={TV} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
