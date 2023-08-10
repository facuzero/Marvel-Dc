import './Home.css';
import CardsRandom from '../CardsRandom/CardsRandom';

const Home = () => {
  /* MarvelChars(api)
    .then((data) => {
      const results = data.data.results;
      results.map((data) => console.log(data.name));
    })
    .catch((error) => console.error(error)); */

  return (
    <div>
      <CardsRandom />
    </div>
  );
};
export default Home;
