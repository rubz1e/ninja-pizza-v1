import './Home.scss';
import Carousel from '../../common/Carousel/Carousel';
import MainCategoryList from './MainCategoryList/MainCategoryList';

export default function Home() {
  return (
    <div className='home'>
      <div className='home-slider'>
        <Carousel />
      </div>
      <div className='home-about'>
        <div className='home-about__wrapper'>
          <h1 className='home-about__h1'>Доставка пиццы в Киеве</h1>
          <p className='home-about__description'>
            Пицца творожная, мясная, вегетарианская, с креветками и лососем — у Ninja Pizza есть все, что тебе нужно!
          </p>
        </div>
      </div>
      <div className='home-content'>
        <div className='home-products'>
          <div className='product-list'>
            <div className='product-list__top'>Пиццы</div>
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
        </div>
      </div>
    </div>
  );
}
