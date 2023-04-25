import './Main.scss';

import Carousel from '../../common/Carousel/Carousel';
import ProductList from '../../common/ProductList/ProductList';
import MainBanner from './MainBanner/MainBanner';
import MainInfo from './MainInfo/MainInfo';
import { useEffect } from 'react';

export default function Main() {
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main'>
      <div className='main-slider'>
        <Carousel />
      </div>
      <div className='main-content'>
        <div className='main-products'>
          <ProductList id='1' title='Пиццы 🍕' category='pizza' />
          <ProductList id='2' title='Напитки 🥤' category='drinks' />
          <ProductList id='3' title='Дессерты 🍰' category='desserts' />
          <ProductList id='4' title='Соусы 🥫' category='sausec' />
        </div>
        <div className='main-banner'>
          <MainBanner />
        </div>
        <div className='main-text'>
          <MainInfo />
        </div>
      </div>
    </div>
  );
}
