import React from 'react';

import { ReactComponent as GPSHome } from '../../../../assets/home/gpsHome.svg';

export default function HomeGPS() {
  return (
    <div className='home-gps'>
      <h2 className='home-title'>Адрес доставки</h2>
      <div className='home-bottom'>
        <div className='home-bottom__card'>
          <div className='home-bottom__left'>
            <GPSHome width='224' height='170' />
          </div>
          <div className='home-bottom__right'>
            <h3 className='home-bottom__right-title'>У вас нет сохраненных адресов</h3>
            <p className='home-bottom__right-description'>
              Переходите в интересующую вас категорию и сделайте свой первый заказ и адрес сохранится автоматически.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
