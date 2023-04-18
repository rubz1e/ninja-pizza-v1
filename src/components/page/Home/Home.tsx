import React, { useEffect } from 'react';

import './Home.scss';
import Carousel from '../../common/Carousel/Carousel';
import MainCategoryList from './MainCategoryList/MainCategoryList';

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
          <div className='product-list' id='1' title='Пицца'>
            <div className='product-list__top'>Пиццы 🍕</div>
            <div className='product-list__wrapper'>
              <div className='product-list__content'>
                <div className='product-list__temp'>
                  <MainCategoryList getElement='pizza' />
                </div>
              </div>
            </div>
            <div className='product-list__bottom'>
              <a href='/pizza' className='product-list__button'>
                Смотреть все
              </a>
            </div>
          </div>
          <div className='product-list' id='2' title='Напитки'>
            <div className='product-list__top'>Напитки 🥤</div>
            <div className='product-list__wrapper'>
              <div className='product-list__content'>
                <div className='product-list__temp'>
                  <MainCategoryList getElement='drinks' />
                </div>
              </div>
            </div>
            <div className='product-list__bottom'>
              <a href='/drinks' className='product-list__button'>
                Смотреть все
              </a>
            </div>
          </div>
          <div className='product-list' id='3' title='Десерты'>
            <div className='product-list__top'>Дессерты 🍰</div>
            <div className='product-list__wrapper'>
              <div className='product-list__content'>
                <div className='product-list__temp'>
                  <MainCategoryList getElement='desserts' />
                </div>
              </div>
            </div>
            <div className='product-list__bottom'>
              <a href='/desserts' className='product-list__button'>
                Смотреть все
              </a>
            </div>
          </div>
          <div className='product-list' id='4' title='Соусы'>
            <div className='product-list__top'>Соусы 🥫</div>
            <div className='product-list__wrapper'>
              <div className='product-list__content'>
                <div className='product-list__temp'>
                  <MainCategoryList getElement='sausec' />
                </div>
              </div>
            </div>
            <div className='product-list__bottom'>
              <a href='/sausec' className='product-list__button'>
                Смотреть все
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
