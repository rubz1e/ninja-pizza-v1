import React, { useState } from 'react';

import { ReactComponent as GPSHome } from '../../../../assets/home/gpsHome.svg';
import Modal from '../../../common/Modal/Modal';

export default function HomeGPS() {
  const [isShowAddAdress, setIsShowAddAdress] = useState(false);

  const handleClickAddAdress = () => {
    setIsShowAddAdress(true);
  };

  return (
    <div className='home-gps'>
      <div className='home-top'>
        <h2 className='home-title'>Адрес доставки</h2>
        <button onClick={handleClickAddAdress} className='home-button__add'>
          Добавить адрес
        </button>
        {isShowAddAdress && (
          <Modal
            onClose={() => setIsShowAddAdress(false)}
            title='Адрес доставки'
            description='Эта модальное окно находится в разработке'
            button='Вернуться'
            onClick={() => setIsShowAddAdress(false)}
          />
        )}
      </div>
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
