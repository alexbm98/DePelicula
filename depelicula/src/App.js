import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom'; 
import { MoviesGrid } from './components/MoviesGrid';
import { MovieDetails } from './components/MovieDetails';
import { Trailer } from './pages/Trailer';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div>
        <Routes>
          <Route path="/films" element={<MoviesGrid></MoviesGrid>}></Route>
          <Route path="/films/search/:filmTitle" element={<Search></Search>}></Route>
          <Route path="/films/:filmId" element={<MovieDetails></MovieDetails>}></Route>
          <Route path="/films/:filmId/trailer" element={<Trailer></Trailer>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
