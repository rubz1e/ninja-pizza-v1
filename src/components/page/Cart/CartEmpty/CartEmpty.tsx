import React from 'react';
import { Link } from 'react-router-dom';

import PizzaImg from '../../../../assets/Cart/pizza2x.webp';
import DrinkImg from '../../../../assets/Cart/drinks2x.webp';
import SausecImg from '../../../../assets/Cart/sauces2x.webp';
import DessertsImg from '../../../../assets/Cart/desert2x.webp';

export default function CartEmpty() {
  return (
    <>
      <div className='cart-clear'>
        <h2 className='cart-clear__title'>Ваша корзина пуста 😕</h2>
        <p className='cart-clear__description'>Это нужно поправить. Переходите в меню и выбирайте вкусную пиццу!</p>
        <div className='cart-menu cart-menu__list'>
          <Link to='/pizza' className='cart-menu__item cart-menu__pizza'>
            <div className='cart-menu__image'>
              <img src={PizzaImg} alt='Пицца' />
            </div>
            <div className='cart-menu__title'>Пиццы</div>
          </Link>
          <Link to='/drinks' className='cart-menu__item cart-menu__drinks'>
            <div className='cart-menu__image'>
              <img src={DrinkImg} alt='Напитки' />
            </div>
            <div className='cart-menu__title'>Напитки</div>
          </Link>
          <Link to='/sausec' className='cart-menu__item cart-menu__sausec'>
            <div className='cart-menu__image'>
              <img src={SausecImg} alt='Соусы' />
            </div>
            <div className='cart-menu__title'>Соусы</div>
          </Link>
          <Link to='/desserts' className='cart-menu__item cart-menu__desserts'>
            <div className='cart-menu__image'>
              <img src={DessertsImg} alt='Дессерты' />
            </div>
            <div className='cart-menu__title'>Дессерты</div>
          </Link>
        </div>
      </div>
    </>
  );
}
