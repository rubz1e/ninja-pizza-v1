import './Main.scss';

import Carousel from '../../common/Carousel/Carousel';
import ProductList from '../../common/ProductList/ProductList';
import MainBanner from './MainBanner/MainBanner';
import MainInfo from './MainInfo/MainInfo';
import { useEffect } from 'react';
import useTranslation from '../../../hooks/useTranslations';

export default function Main() {
  const { t } = useTranslation();
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <div className="main-slider">
        <Carousel />
      </div>
      <div className="main-content">
        <div className="main-products">
          <ProductList id="1" title={`${t.main.pizza} 🍕`} category="pizza" />
          <ProductList id="2" title={`${t.main.drinks} 🥤`} category="drinks" />
          <ProductList id="3" title={`${t.main.desserts} 🍰`} category="desserts" />
          <ProductList id="4" title={`${t.main.sausec} 🥫`} category="sausec" />
        </div>
        <div className="main-banner">
          <MainBanner />
        </div>
        <div className="main-text">
          <MainInfo />
        </div>
      </div>
    </div>
  );
}
