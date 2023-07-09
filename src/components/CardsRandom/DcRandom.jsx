import { useEffect, useState } from 'react';
import * as imgDC from '../../images/imagesDC';
import './DcRandom.css';

const DcRandom = () => {
  const images = Object.values(imgDC);
  const [imageDC, setImageDC] = useState(imgDC.arrow);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= images.length) {
        nextIndex = 0;
      }
      setCurrentIndex(nextIndex);
      setImageDC(images[nextIndex]);
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
    const images = document.querySelectorAll('#dc');
    images.forEach((image) => {
      image.classList.add('animatedR', 'bounceInRight');
    });
  };

  const removeAnimationClasses = () => {
    const images = document.querySelectorAll('#dc');
    images.forEach((image) => {
      image.classList.remove('animatedR', 'bounceInRight');
    });
  };

  return (
    <div className='images'>
      <img className='imgCards' id='dc' src={imageDC} alt='DC Hero' />
    </div>
  );
};
export default DcRandom;
