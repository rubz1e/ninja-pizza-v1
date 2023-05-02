import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/useRedux.tsx';
import { useAuth } from '../../../hooks/useAuth.tsx';
import { removeUser, setUser } from '../../../redux/slices/userSlice.tsx';

import './Home.scss';

import { ReactComponent as Archive } from '../../../assets/home/archive.svg';
import { ReactComponent as Heart } from '../../../assets/home/heart.svg';
import { ReactComponent as GPS } from '../../../assets/home/gps.svg';
import { ReactComponent as Theme } from '../../../assets/home/themeSite.svg';
import { ReactComponent as Stroke } from '../../../assets/home/stroke.svg';
import { ReactComponent as Ninja } from '../../../assets/Ninja.svg';

import HomeOrders from './HomeOrders/HomeOrders.tsx';
import HomeFavorite from './HomeFavorite/HomeFavorite.tsx';
import HomeGPS from './HomeGPS/HomeGPS.tsx';
import Modal from '../../common/Modal/Modal.tsx';
import { useTheme } from '../../../hooks/useTheme.tsx';
import useTranslation from '../../../hooks/useTranslations.tsx';

export default function Home() {
  const location = useLocation();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const { email } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isShowSaveModal, setIsShowSaveModal] = useState(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const handleClickSaveSettings = () => {
    setIsShowSaveModal(true);
  };

  const handleClickLogout = () => {
    setIsShowLogoutModal(true);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
      return;
    }
  }, [dispatch]);

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

  const signOut = () => {
    dispatch(removeUser());
    localStorage.removeItem('userData');
    navigate('/');
  };
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-content">
          <div className="home-left">
            <div className="home-left__tab">
              <ul className="home-tab">
                <li
                  className={activeTab === 0 ? 'home-tab__button-active home-tab__button' : 'home-tab__button'}
                  onClick={() => handleTabClick(0)}
                >
                  <Archive width="24" height="24" />
                  {t.account.orderHistoryTitle}
                </li>
                <li
                  className={activeTab === 1 ? 'home-tab__button-active home-tab__button' : 'home-tab__button'}
                  onClick={() => handleTabClick(1)}
                >
                  <Heart width="24" height="24" />
                  {t.account.selectedProductsTitle}
                </li>
                <li
                  className={activeTab === 2 ? 'home-tab__button-active home-tab__button' : 'home-tab__button'}
                  onClick={() => handleTabClick(2)}
                >
                  <GPS width="24" height="24" />
                  {t.account.shippingAddressTitle}
                </li>
                <button className={'home-tab__button'} onClick={handleSwitchTheme}>
                  <Theme width="24" height="24" />
                  {t.account.changeTheme} {theme === 'dark' ? `${t.account.light}` : `${t.account.dark}`}
                </button>
                <div className="home-tab__profile">
                  <div className="home-profile__left">
                    <div className="home-profile__avatar">
                      <Ninja />
                    </div>
                  </div>
                  <div className="home-profile__right">
                    <div className="home-profile__right-top">
                      <h3 className="home-profile__name">NINJA</h3>
                      <button onClick={handleClickSaveSettings} className="home-profile__edit">
                        <Stroke width="16" height="16" />
                      </button>
                      {isShowSaveModal && (
                        <Modal
                          onClose={() => setIsShowSaveModal(false)}
                          title="Личные данные"
                          description="Пожалуйста введите ваши корректные данные"
                          button="Сохранить изменения"
                        />
                      )}
                    </div>
                    <h3 className="home-profile__description">{email}</h3>
                    <h3 className="home-profile__phone">{t.account.profileCard}</h3>
                  </div>
                </div>
                <button className="home-tab__signout" onClick={handleClickLogout}>
                  {t.account.logout}
                </button>
                {isShowLogoutModal && (
                  <Modal
                    title="Выход из аккаунта"
                    description="Вы точно хотите выйти из своего аккаунта?"
                    button="Выйти"
                    onClose={() => setIsShowLogoutModal(false)}
                    onClick={() => signOut()}
                  />
                )}
              </ul>
            </div>
          </div>
          <div className="home-right">
            <div className="home-tab__content">
              {activeTab === 0 && <HomeOrders />}
              {activeTab === 1 && <HomeFavorite />}
              {activeTab === 2 && <HomeGPS />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
