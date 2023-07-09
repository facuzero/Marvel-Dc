import './Header.css';
import { logoM, logoD, logoMD } from '../../images/imagesLogo';
import { Link } from 'react-router-dom';
const Header = () => {
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
            <input type='search' name='search' id='' />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
