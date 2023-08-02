import './Header.css';
import { logoM, logoD, logoMD } from '../../images/imagesLogo';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { MarvelHero } from '../../APIs/apiSearch';
const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const emptyRef = useRef('');
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchValue.trim() === '') {
        setSuggestions([]);
      } else {
        try {
          const data = await MarvelHero(searchValue);
          const results = data.data.results;

          if (emptyRef.current.value !== '') {
            const filteredSuggestions = results.filter((suggestion) =>
              suggestion.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchSuggestions();
  }, [searchValue]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSearch = () => {
    //const value = event.target.value;
    //console.log(value); VERIFICAR value
  };
  return (
    <header>
      <nav className='header-nav'>
        <div className='marvel_dc-logo'>
          <li>Marvel</li>
          <img className='logo' src={logoM} alt='' />
        </div>

        <Link to={'/'}>
          <img className='logo' src={logoMD} alt='marvel-dc' />
        </Link>

        <div className='marvel_dc-logo'>
          <li>DC</li>
          <img className='logo' src={logoD} alt='' />
        </div>
      </nav>
      <div className='links'>
        <ul>
          <Link to={'/comics'}>Comics</Link>
          <Link to={'/juegos'}>Juegos</Link>
          <Link to={'/series'}>Series</Link>
          <Link to={'/peliculas'}>Peliculas</Link>
          <li>
            Buscar heroe
            <input type='search' name='search' id='' onChange={handleChange} ref={emptyRef} />
            <button onClick={handleSearch} name='search'>
              Buscar
            </button>
            {suggestions.length > 0 && (
              <div className='suggestions'>
                {suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion.name}</li>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
