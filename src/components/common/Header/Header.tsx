import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as Phone } from '../../../assets/phone.svg';
import { ReactComponent as Favorite } from '../../../assets/favorite.svg';
import { ReactComponent as Private } from '../../../assets/private.svg';
import { ReactComponent as Magazine } from '../../../assets/magazine.svg';
import Modal from '../Modal/Modal';
import { useAuth } from '../../../hooks/use-auth';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { isAuth } = useAuth();

  const handleLinkClick = () => {
    setShowModal(false);
    setShowOverlay(false);
  };

  const handleMouseEnter = () => {
    setShowModal(true);
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
    setShowOverlay(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
        setShowOverlay(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
                {isAuth ? (
                  <Link to={{ pathname: '/home', search: '?account=1' }} className='header-info__favorite'>
                    <Favorite width='24' height='24' />
                  </Link>
                ) : (
                  <div ref={modalRef}>
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className='header-info__favorite'
                    >
                      <Favorite width='24' height='24' />
                    </div>
                    {showModal && (
                      <div className='header-expander' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Modal
                          onLinkClick={handleLinkClick}
                          link={{ pathname: '/home', search: '?account=0' }}
                          text='Чтобы использовать все функции сайта, войдите в свой кабинет'
                        />
                      </div>
                    )}
                  </div>
                )}
                {isAuth ? (
                  <Link to={{ pathname: '/home', search: '?account=0' }} className='header-info__private'>
                    <Private width='24' height='24' />
                  </Link>
                ) : (
                  <div ref={modalRef}>
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className='header-info__private'
                    >
                      <Private width='24' height='24' />
                    </div>
                    {showModal && (
                      <div className='header-expander' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Modal
                          onLinkClick={handleLinkClick}
                          link={{ pathname: '/home', search: '?account=1' }}
                          text='Чтобы использовать все функции сайта, войдите в свой кабинет'
                        />
                      </div>
                    )}
                  </div>
                )}
                <Link to='/cart' className='header-info__cart'>
                  <Magazine width='24' height='24' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showOverlay && <div className='overlay'></div>}
    </>
  );
}
