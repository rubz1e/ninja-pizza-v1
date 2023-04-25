import React from 'react';

import './Footer.scss';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-content'>
          <div className='footer-info footer-item'>
            <div className='footer-logo'>
              <Logo className='footer-logo__ninja' />
            </div>
            <div className='footer-description'>
              Пицца сырная, мясная, вегетарианская, с креветками и лососем - в Ninja Pizza есть все, что тебе нужно!
            </div>
          </div>
          <div className='footer-navigation footer-item'>
            <div className='footer-small'>Навигация:</div>
            <div className='footer-links'>
              <Link to='/' className='footer-link'>
                Главная
              </Link>
              <Link to='/delivery' className='footer-link'>
                Доставка
              </Link>
              <Link to='/about' className='footer-link'>
                О нас
              </Link>
              <Link to='/news' className='footer-link'>
                Новости
              </Link>
            </div>
          </div>
          <div className='footer-phones footer-item'>
            <div className='footer-small'>Оформить заказ:</div>
            <div className='footer-links'>
              <Link to='tel:+38 (095) 479 69 75' className='footer-link'>
                +38 (095) 479 69 75
              </Link>
              <Link to='tel:+38 (067) 579 69 75' className='footer-link'>
                +38 (067) 579 69 75
              </Link>
              <Link to='tel:+38 (093) 675 79 69' className='footer-link'>
                +38 (093) 675 79 69
              </Link>
            </div>
            <div className='footer-small footer-phones__text'>Звоните нам с 11:00 до 22:30 без выходных</div>
          </div>
          <div className='footer-other footer-item'>
            <div className='footer-clock'>
              <div className='footer-small'>Работаем:</div>
              <div className='footer-time'>с 11: 00 до 22: 30</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
