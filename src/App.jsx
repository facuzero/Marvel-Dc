import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Comics, Hero, Juegos, Peliculas, Series } from './components/pages';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/juegos' element={<Juegos />} />
        <Route path='/series' element={<Series />} />
        <Route path='/peliculas' element={<Peliculas />} />
        <Route path='/hero/:name' element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
