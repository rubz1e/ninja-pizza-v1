import React from 'react';

export default function CartTotal() {
  return (
    <>
      <div className='cart-total'>
        <div className='cart-total__price'>
          <span className='cart-total__small'>Сумма заказа:</span>
          <div className='cart-total__number'>
            <p>2</p>
            <div className='cart-total__currency'>грн</div>
          </div>
        </div>
        <button className='cart-total__button'>Оформить</button>
      </div>
    </>
  );
}
