import './Main.scss';

import Carousel from '../../common/Carousel/Carousel';
import ProductList from '../../common/ProductList/ProductList';
import MainBanner from './MainBanner/MainBanner';
import MainInfo from './MainInfo/MainInfo';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { useEffect } from 'react';
import { setUser } from '../../../redux/slices/userSlice';

export default function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
      return;
    }
  }, [dispatch]);

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
