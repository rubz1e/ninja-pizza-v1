import React from 'react';

import './MainBanner.scss';
import Banner from '../../../../assets/mobile-app-image_ua.png';
import Android from '../../../../assets/android.svg';
import IOS from '../../../../assets/ios.svg';

export default function MainBanner() {
  return (
    <div>
      <div className='mobile-app'>
        <div className='mobile-app__content'>
          <div className='mobile-app__text'>
            <div className='mobile-app__title'>Загружайте приложение и делайте заказы еще быстрее</div>
            <div className='mobile-app__links'>
              <a href='/' className='mobile-app__link'>
                <img src={IOS} alt='' />
              </a>
              <a href='/' className='mobile-app__link'>
                <img src={Android} alt='' />
              </a>
            </div>
          </div>
          <div className='mobile-app__image'>
            <img src={Banner} alt='' className='mobile-app__desktop' />
          </div>
        </div>
      </div>
    </div>
  );
}
