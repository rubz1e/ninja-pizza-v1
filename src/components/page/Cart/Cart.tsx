import React from 'react';
import { Link } from 'react-router-dom';

import './Cart.scss';

// import { ReactComponent as Close } from '../../../assets/burgerMenu/open.svg';
// import { ReactComponent as Minus } from '../../../assets/minusButton.svg';
// import { ReactComponent as Plus } from '../../../assets/plusButton.svg';
// import { ReactComponent as DeleteCart } from '../../../assets/Cart/deleteCart.svg';
// import { ReactComponent as Basket } from '../../../assets/magazine.svg';
// import { ReactComponent as ArrowBack } from '../../../assets/arrowBack.svg';

import PizzaImg from '../../../assets/Cart/pizza2x.webp';
import DrinkImg from '../../../assets/Cart/drinks2x.webp';
import SausecImg from '../../../assets/Cart/sauces2x.webp';
import DessertsImg from '../../../assets/Cart/desert2x.webp';

// import Test from '../../../assets/Cart/pizza2x.webp';

export default function Cart() {
  return (
    <div className='cart'>
      <div className='cart-wrapper'>
        {/* Пустая корзина */}

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

        {/* Корзина с чем-либо */}

        {/* <div className='cart-top'>
          <div className='cart-top__left'>
            <Basket width='24' height='24' fill='black' />
            <h2>Корзина</h2>
          </div>
          <div className='cart-top__right'>
            <DeleteCart width='24' height='24' />
            <p>Очистить корзину</p>
          </div>
        </div>
        <div className='cart-items'>
          <div className='cart-item '>
            <div className='cart-item__remove'>
              <Close width='20' height='20' />
            </div>
            <div className='cart-item__content'>
              <div className='cart-item__image'>
                <img src={Test} alt='' />
              </div>
              <div className='cart-item__info'>
                <div className='cart-item__name'>Пицца с салями и телятиной</div>
                <div className='cart-item__weight'>30 см / 610 г</div>
                <div className='cart-item__bottom'>
                  <div className='cart-item__price'>
                    <p>370</p>
                    <span className='cart-item__currency'>грн</span>
                  </div>
                  <div className='cart-item__controls'>
                    <div className='cart-item__control cart-item__minus'>
                      <Minus width='20' height='20' />
                    </div>
                    <div className='cart-item__count'>9</div>
                    <div className='cart-item__control cart-item__plus'>
                      <Plus width='20' height='20' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cart-total'>
          <div className='cart-total__price'>
            <span className='cart-total__small'>Сумма заказа:</span>
            <div className='cart-total__number'>
              <p>3330</p>
              <div className='cart-total__currency'>грн</div>
            </div>
          </div>
          <button className='cart-total__button'>Оформить</button>
        </div> */}
      </div>
    </div>
  );
}
