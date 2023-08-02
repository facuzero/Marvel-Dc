import Header from '../Header/Header';
import './Home.css';
import CardsRandom from '../CardsRandom/CardsRandom';
import { MarvelChars } from '../../APIs/apiChar';

const Home = () => {
  const api = import.meta.env.VITE_APIKEYMARVEL;

  /* MarvelChars(api)
    .then((data) => {
      const results = data.data.results;
      results.map((data) => console.log(data.name));
    })
    .catch((error) => console.error(error)); */

  return (
    <div>
      <Header />
      <CardsRandom />
    </div>
  );
};
export default Home;
