import './Header.css';
import { logoM, logoD, logoMD } from '../../images/imagesLogo';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { MarvelHeroes } from '../../APIs/apiSearch';
const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const emptyRef = useRef('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchValue.trim() === '') {
        setSuggestions([]);
      } else {
        try {
          const data = await MarvelHeroes(searchValue);
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

  const handleSearch = async (name) => {
    try {
      setSuggestions([]);
      setSearchValue('');
      navigate(`/hero/${name}`);
    } catch (error) {
      console.error(error);
    }
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
          <div>
            Buscar heroe
            <input type='search' name='search' id='' onChange={handleChange} ref={emptyRef} />
            <button onClick={handleSearch} name='search'>
              Buscar
            </button>
            {suggestions.length > 0 && (
              <div className='suggestions'>
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSearch(suggestion.name)}>
                    {suggestion.name}
                  </li>
                ))}
              </div>
            )}
          </div>
        </ul>
      </div>
    </header>
  );
};
export default Header;
