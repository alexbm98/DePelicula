import { Routes, Route } from 'react-router-dom'; 
import { MoviesGrid } from './components/MoviesGrid';
import { AnimesGrid } from './components/AnimesGrid';
import { MovieDetails } from './components/MovieDetails';
import { AnimeDetails } from './components/AnimeDetails';
import { Trailer } from './pages/Trailer';
import { Login } from './pages/Login';
import { SignIn } from './pages/SignIn';
import { Search } from './components/Search';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState();

  return (      
      <div className="App">
        <Routes>
          {/*Login route*/}
          <Route path="/login" element={<Login setToken={setToken}></Login>}></Route>
          {/*SignIn route*/}
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          {/*Films routes*/}
          <Route path="/films" element={<MoviesGrid token={token}></MoviesGrid>}></Route>
          <Route path="/films/search/:filmTitle" element={<Search token={token}></Search>}></Route>
          <Route path="/films/:id" element={<MovieDetails token={token}></MovieDetails>}></Route>
          <Route path="/films/:id/trailer" element={<Trailer type="films/" token={token}></Trailer>}></Route>
          {/*Series routes*/}
          <Route path="/series" element={<MoviesGrid></MoviesGrid>}></Route>
          <Route path="/series/search/:seriesTitle" element={<Search></Search>}></Route>
          <Route path="/series/:id" element={<MovieDetails></MovieDetails>}></Route>
          <Route path="/series/:id/trailer" element={<Trailer type="series/"></Trailer>}></Route>
          {/*Animes routes*/}
          <Route path="/animes" element={<AnimesGrid token={token}></AnimesGrid>}></Route>
          <Route path="/animes/search/:animeTitle" element={<Search token={token}></Search>}></Route>
          <Route path="/animes/:id" element={<AnimeDetails token={token}></AnimeDetails>}></Route>
          <Route path="/animes/:id/trailer" element={<Trailer type="animes/" token={token}></Trailer>}></Route>
        </Routes>
      </div>
    );
}

export default App;
