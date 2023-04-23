import React from 'react';

import { ReactComponent as DeleteCart } from '../../../../assets/Cart/deleteCart.svg';
import { ReactComponent as Basket } from '../../../../assets/magazine.svg';

export default function CartHeader() {
  return (
    <>
      <div className='cart-top'>
        <div className='cart-top__left'>
          <Basket width='24' height='24' fill='black' />
          <h2>Корзина</h2>
        </div>
        <button className='cart-top__right'>
          <DeleteCart width='24' height='24' />
          <p>Очистить корзину</p>
        </button>
      </div>
    </>
  );
}
