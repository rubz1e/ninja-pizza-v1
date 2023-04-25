import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Expander from '../Expander/Expander';

import './Header.scss';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as Phone } from '../../../assets/phone.svg';
import { ReactComponent as Favorite } from '../../../assets/favorite.svg';
import { ReactComponent as Private } from '../../../assets/private.svg';
import { ReactComponent as Magazine } from '../../../assets/magazine.svg';
import Ninja from '../../../assets/Ninja.png';

export default function Header() {
  const { isAuth } = useAuth();
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalFavorite, setShowModalFavorite] = useState(false);
  const modalRefFavorite = useRef<HTMLDivElement>(null);
  const modalRefPrivate = useRef<HTMLDivElement>(null);

  const handleOpenModalLogin = () => {
    setShowModalLogin((prevState) => !prevState);
  };

  const handleOpenModalFavorite = () => {
    setShowModalFavorite((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRefFavorite.current &&
        !modalRefFavorite.current.contains(event.target as Node) &&
        modalRefPrivate.current &&
        !modalRefPrivate.current.contains(event.target as Node)
      ) {
        setShowModalLogin(false);
        setShowModalFavorite(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <header className='header'>
        <div className='wrapper header-wrapper'>
          <div className='header-content'>
            <div className='header-left'>
              <div className='header-logo'>
                <Link to='/'>
                  <Logo />
                </Link>
              </div>
              <div className='header-navigation'>
                <ul className='nav-item'>
                  <li className='nav-item__list'>
                    <Link to='/'>Главная</Link>
                  </li>
                  <li className='nav-item__list'>
                    <Link to='/menu'>Доставка</Link>
                  </li>
                  <li className='nav-item__list'>
                    <Link to='/about'>О нас</Link>
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
                <>
                  {isAuth ? (
                    <Link to={{ pathname: '/home', search: '?account=1' }} className='header-info__favorite'>
                      <Favorite width='24' height='24' />
                    </Link>
                  ) : (
                    <div ref={modalRefFavorite}>
                      <div className='header-info__favorite' onClick={handleOpenModalFavorite}>
                        <Favorite width='24' height='24' />
                      </div>
                      {showModalFavorite && (
                        <div className='header-expander'>
                          <Expander text='Для просмотра выбранных товаров вам нужно авторизоваться' />
                        </div>
                      )}
                    </div>
                  )}
                </>
                <>
                  {isAuth ? (
                    <Link to={{ pathname: '/home', search: '?account=0' }} className='header-info__private'>
                      <img src={Ninja} alt='' className='header-info__private-avatar' />
                    </Link>
                  ) : (
                    <div ref={modalRefPrivate}>
                      <div className='header-info__private' onClick={handleOpenModalLogin}>
                        <Private width='24' height='24' />
                      </div>
                      {showModalLogin && (
                        <div className='header-expander'>
                          <Expander text='Для просмотра выбранных товаров вам нужно авторизоваться' />
                        </div>
                      )}
                    </div>
                  )}
                </>
                <Link to='/cart' className='header-info__cart'>
                  <Magazine width='24' height='24' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
