import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { useAuth } from '../../../hooks/use-auth';
import { removeUser } from '../../../redux/slices/userSlice';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import './Home.scss';

import { ReactComponent as Archive } from '../../../assets/home/archive.svg';
import { ReactComponent as Heart } from '../../../assets/home/heart.svg';
import { ReactComponent as GPS } from '../../../assets/home/gps.svg';
import { ReactComponent as Theme } from '../../../assets/home/themeSite.svg';
import { ReactComponent as Stroke } from '../../../assets/home/stroke.svg';

import Avatar from '../../../assets/home/avatar.png';
import HomeOrders from './HomeOrders/HomeOrders';
import HomeFavorite from './HomeFavorite/HomeFavorite';
import HomeGPS from './HoveGPS/HomeGPS';

export default function Home() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabIndex = queryParams.get('account');
    if (tabIndex !== null) {
      setActiveTab(parseInt(tabIndex));
    }
  }, [location.search]);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(removeUser());
    localStorage.removeItem('userData');
    localStorage.removeItem('profile');
    navigate('/');
  };

  return isAuth ? (
    <div className='home'>
      <div className='home-wrapper'>
        <div className='home-content'>
          <div className='home-left'>
            <div className='home-left__tab'>
              <ul className='home-tab'>
                <li
                  className={activeTab === 0 ? 'home-tab__button-active home-tab__button' : 'home-tab__button'}
                  onClick={() => handleTabClick(0)}
                >
                  <Archive width='24' height='24' />
                  История заказов
                </li>
                <li
                  className={activeTab === 1 ? 'home-tab__button-active home-tab__button' : 'home-tab__button'}
                  onClick={() => handleTabClick(1)}
                >
                  <Heart width='24' height='24' />
                  Избранные товары
                </li>
                <li
                  className={activeTab === 2 ? 'home-tab__button-active home-tab__button' : 'home-tab__button'}
                  onClick={() => handleTabClick(2)}
                >
                  <GPS width='24' height='24' />
                  Адрес доставки
                </li>
                <button className={'home-tab__button'}>
                  <Theme width='24' height='24' />
                  Тема сайта
                </button>
                <div className='home-tab__profile'>
                  <div className='home-profile__left'>
                    <div className='home-profile__avatar'>
                      <img src={Avatar} alt='' />
                    </div>
                  </div>
                  <div className='home-profile__right'>
                    <div className='home-profile__right-top'>
                      <h3 className='home-profile__name'>NINJA</h3>
                      <button className='home-profile__edit'>
                        <Stroke width='16' height='16' />
                      </button>
                    </div>
                    <h3 className='home-profile__description'>{email}</h3>
                    <h3 className='home-profile__phone'>+380976986848</h3>
                  </div>
                </div>
                <button className='home-tab__signout' onClick={() => signOut()}>
                  Выйти
                </button>
              </ul>
            </div>
          </div>
          <div className='home-right'>
            <div className='home-tab__content'>
              {activeTab === 0 && <HomeOrders />}
              {activeTab === 1 && <HomeFavorite />}
              {activeTab === 2 && <HomeGPS />}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>{!isAuth && <Navigate to='/login' />}</>
  );
}
