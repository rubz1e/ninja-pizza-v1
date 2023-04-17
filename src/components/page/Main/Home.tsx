import './Home.scss';
import Carousel from '../../common/Carousel/Carousel';

export default function Home() {
  return (
    <div className='home'>
      <div className='home_slider'>
        <Carousel />
      </div>
      <div className='home_about'>
        <div className='home_about-wrapper'>
          <h1 className='home_about-h1'>Доставка пиццы в Киеве</h1>
          <p className='home_about-description'>
            Пицца творожная, мясная, вегетарианская, с креветками и лососем — у Ninja Pizza есть все, что тебе нужно!
          </p>
        </div>
      </div>
      <div className='home_content'></div>
    </div>
  );
}
