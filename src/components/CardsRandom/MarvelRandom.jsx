import { useState, useEffect } from 'react';
import * as imgMarvel from '../../images/imagesMarvel';
import './MarvelRandom.css';

const MarvelRandom = () => {
  const images = Object.values(imgMarvel);
  const [imageMarvel, setImageMarvel] = useState(imgMarvel.captain);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= images.length) {
        nextIndex = 0;
      }
      setCurrentIndex(nextIndex);
      setImageMarvel(images[nextIndex]);
      applyAnimationClasses();
      setTimeout(() => {
        removeAnimationClasses();
      }, 2000);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images]);

  const applyAnimationClasses = () => {
    const images = document.querySelectorAll('#marvel');
    images.forEach((image) => {
      image.classList.add('animatedL', 'bounceInLeft');
    });
  };

  const removeAnimationClasses = () => {
    const images = document.querySelectorAll('#marvel');
    images.forEach((image) => {
      image.classList.remove('animatedL', 'bounceInLeft');
    });
  };

  return (
    <div className='images'>
      <img className='imgCards' id='marvel' src={imageMarvel} alt='Marvel Hero' />
    </div>
  );
};

export default MarvelRandom;
