import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarvelChar } from '../../../APIs/apiChar';

const Hero = () => {
  const { name } = useParams();
  const [hero, setHero] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await MarvelChar(name);
        const heroData = data.data.results[0];
        const image = `${heroData.thumbnail.path}.jpg`;
        setHero(heroData);
        setImage(image);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [name]);

  if (!hero) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <h2>{hero.name}</h2>
        <div className='heroImage'>
          {image ? <img src={image} alt='HeroImage' /> : <p>Cargando...</p>}
        </div>
        {hero.description && <p> {hero.description} </p>}
      </div>
    );
  }
};

export default Hero;
