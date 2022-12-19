import { Routes, Route, Navigate } from 'react-router-dom'; 
import { MoviesGrid } from './components/MoviesGrid';
import { MoviesGenre } from './components/MoviesGenre';
import { SeriesGrid } from './components/SeriesGrid';
import { SeriesGenre } from './components/SeriesGenre';
import { MovieDetails } from './components/MovieDetails';
import { SeriesDetails } from './components/SeriesDetails';
import { Trailer } from './pages/Trailer';
import { Login } from './pages/Login';
import { SignIn } from './pages/SignIn';
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
          <Route path="/films/genre/:genre" element={<MoviesGenre token={token}></MoviesGenre>}></Route>
          <Route path="/films/:id" element={<MovieDetails token={token}></MovieDetails>}></Route>
          <Route path="/films/:id/trailer" element={<Trailer type="films/" token={token}></Trailer>}></Route>
          {/*Series routes*/}
          <Route path="/series" element={<SeriesGrid token={token}></SeriesGrid>}></Route>
          <Route path="/series/genre/:genre" element={<SeriesGenre token={token}></SeriesGenre>}></Route>
          <Route path="/series/:id" element={<SeriesDetails token={token}></SeriesDetails>}></Route>
          <Route path="/series/:id/trailer" element={<Trailer type="series/" token={token}></Trailer>}></Route>
          {/*Default route*/}
          <Route path="*" element={<Navigate to="/films"></Navigate>}></Route>
        </Routes>
      </div>
    );
}

export default App;
