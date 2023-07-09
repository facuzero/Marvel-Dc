import DcRandom from './DcRandom';
import MarvelRandom from './MarvelRandom';
import './CardsRandom.css';

const CardsRandom = () => {
  return (
    <div className='images'>
      <MarvelRandom />
      <DcRandom />
    </div>
  );
};
export default CardsRandom;
