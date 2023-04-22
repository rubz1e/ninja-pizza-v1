import { Link } from 'react-router-dom';

import './Header.scss';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as Phone } from '../../../assets/phone.svg';
import { ReactComponent as Favorite } from '../../../assets/favorite.svg';
import { ReactComponent as Private } from '../../../assets/private.svg';
import { ReactComponent as Magazine } from '../../../assets/magazine.svg';

export default function Header() {
  return (
    <header className='header'>
      <div className='wrapper header-wrapper'>
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
                  <Link to='/'>Главная</Link>
                </li>
                <li className='nav-item__list'>
                  <Link to='/menu'>Меню</Link>
                </li>
                <li className='nav-item__list'>
                  <Link to='/about'>Клиентам</Link>
                </li>
                <li className='nav-item__list'>
                  <Link to='/news'>Новости</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='header-right'>
            <div className='header-info'>
              <Link className='header-info__phone' to='tel:+38 (067) 579 69 75'>
                <Phone width='24' height='24' />
                <p className=''>+38 (067) 579 69 75</p>
              </Link>
              <Link to='/favorite' className='header-info__favorite'>
                <Favorite width='24' height='24' />
              </Link>
              <Link to='/home' className='header-info__private'>
                <Private width='24' height='24' />
              </Link>
              <Link to='/cart' className='header-info__cart'>
                <Magazine width='24' height='24' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
