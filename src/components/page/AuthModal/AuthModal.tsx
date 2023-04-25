import React from 'react';

import './AuthModal.scss';
import { ReactComponent as CloseModal } from '../../../assets/closeModal.svg';

import { ReactComponent as Google } from '../../../assets/icons8-google.svg';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, User, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { setUser } from '../../../redux/slices/userSlice';
import { Form } from '../../common/Form/Form';

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleClose = () => {
    onClose();
  };

  const handleAuthSuccess = (user: User) => {
    dispatch(
      setUser({
        email: user.email,
        token: user.refreshToken,
        id: user.uid,
      })
    );
    localStorage.setItem(
      'userData',
      JSON.stringify({
        email: user.email,
        token: user.refreshToken,
        id: user.uid,
      })
    );
    navigate('/home');
  };

  const handleLoginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => handleAuthSuccess(result.user))
      .catch();
  };

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => handleAuthSuccess(user))
      .catch();
  };

  return (
    <div className='auth-backdrop'>
      <div className='auth-overlay'>
        <div className='auth-container'>
          <div className='auth-wrapper'>
            <div className='auth-window'>
              <div className='auth-content'>
                <div className='auth-close' onClick={handleClose}>
                  <CloseModal width='20' height='20' />
                </div>
                <div className='auth-top'>
                  <h3 className='auth-title'>Авторизация</h3>
                  <div className='auth-description'>Вход в аккаунт</div>
                </div>
                <div className='auth-middle'>
                  <Form title='Вход по почте' handleClick={handleLogin} />
                  <hr className='auth-middle__another' />
                  <button onClick={() => handleLoginGoogle()} className='auth-middle__button'>
                    <Google className='auth-middle__icon' width='30' height='30' />
                    Продолжить с Google
                  </button>
                </div>
                <div className='auth-bottom'>
                  <p className='auth-middle__description'>
                    Забыли пароль?
                    <Link to='/resetpassword' onClick={onClose} className='auth-bottom__link'>
                      Восстановить
                    </Link>
                  </p>
                  <p className='auth-bottom__description'>
                    Нет аккаунта?
                    <Link to='/signup' onClick={onClose} className='auth-bottom__link'>
                      Регистрация
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
