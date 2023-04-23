import React from 'react';
import { ReactComponent as MakeAOrders } from '../../../../assets/home/makeAorders.svg';

export default function HomeOrders() {
  return (
    <div className='home-orders'>
      <h2 className='home-title'>История заказов</h2>
      <div className='home-bottom'>
        <div className='home-bottom__card'>
          <div className='home-bottom__left'>
            <MakeAOrders width='224' height='170' />
          </div>
          <div className='home-bottom__right'>
            <h4 className='home-bottom__right-title'>У вас нет заказов</h4>
            <p className='home-bottom__right-description'>
              Переходите в интересующую вас категорию и сделайте свой первый заказ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
