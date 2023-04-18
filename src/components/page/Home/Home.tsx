import React, { useEffect } from 'react';

import './Home.scss';
import Carousel from '../../common/Carousel/Carousel';
import ProductList from './ProductList/ProductList';
import MobileApp from './MobileApp/MobileApp';
import HomeInfo from './HomeInfo/HomeInfo';

export default function Home() {
  const [backgroundColor, setBackgroundColor] = React.useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 200 && scrollPosition < 1100) {
        setBackgroundColor('#FFF3DD');
      } else if (scrollPosition >= 1100 && scrollPosition < 2300) {
        setBackgroundColor('#E3F3FF');
      } else if (scrollPosition >= 2300 && scrollPosition < 3100) {
        setBackgroundColor('#FFE1E1');
      } else if (scrollPosition >= 3100 && scrollPosition < 3700) {
        setBackgroundColor('#E4F1C6');
      } else {
        setBackgroundColor('#f6f6f6');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    backgroundColor,
  };

  return (
    <div className='home' style={styles}>
      <div className='home-slider'>
        <Carousel />
      </div>
      <div className='home-content'>
        <div className='home-products'>
          <ProductList id='1' title='Пиццы' category='pizza' />
          <ProductList id='2' title='Напитки' category='drinks' />
          <ProductList id='3' title='Дессерты' category='desserts' />
          <ProductList id='4' title='Соусы' category='sausec' />
        </div>
        <MobileApp />
        <div className='home-text'>
          <HomeInfo />
        </div>
      </div>
    </div>
  );
}
