import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Comics, Juegos, Peliculas, Series } from './components/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/juegos' element={<Juegos />} />
        <Route path='/series' element={<Series />} />
        <Route path='/peliculas' element={<Peliculas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
