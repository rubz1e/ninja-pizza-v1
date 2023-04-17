import './Header.scss';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as Phone } from '../../../assets/phone.svg';
import { ReactComponent as Favorite } from '../../../assets/favorite.svg';
import { ReactComponent as Private } from '../../../assets/private.svg';
import { ReactComponent as Magazine } from '../../../assets/magazine.svg';

export default function Header() {
  return (
    <div className='header'>
      <div className='wrapper'>
        <div className='header-content'>
          <div className='header-left'>
            <div className='header-logo'>
              <a href='/'>
                <Logo />
              </a>
            </div>
            <div className='header-navigation'>
              <ul className='nav-item'>
                <li className='nav-item__list'>
                  <a href='/'>Главная</a>
                </li>
                <li className='nav-item__list'>
                  <a href='/'>Меню</a>
                </li>
                <li className='nav-item__list'>
                  <a href='/'>Клиентам</a>
                </li>
                <li className='nav-item__list'>
                  <a href='/'>Новости</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='header-right'>
            <div className='header-info'>
              <a className='header-info__phone' href='tel:+38 (067) 579 69 75'>
                <Phone width='24' height='24' />
                <p className=''>+38 (067) 579 69 75</p>
              </a>
              <a href='/' className='header-info__favorite'>
                <Favorite width='24' height='24' />
              </a>
              <a href='/' className='header-info__private'>
                <Private width='24' height='24' />
              </a>
              <a href='/' className='header-info__cart'>
                <Magazine width='24' height='24' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
