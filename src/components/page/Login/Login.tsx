import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/slices/userSlice';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { Form } from '../../common/Form/Form';
import './Login.scss';

import { ReactComponent as Google } from '../../../assets/google-icon.svg';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
      navigate('/home');
      return;
    }
  }, [dispatch, navigate]);

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
      .catch((error) => console.log(error));
  };

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => handleAuthSuccess(user))
      .catch(console.error);
  };

  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-content'>
          <div className='login-top'>
            <h3 className='login-top__title'>Авторизация</h3>
          </div>
          <div className='login-form'>
            <Form title='Войти' handleClick={handleLogin} />
          </div>
          <hr className='login-divider' />
          <button onClick={() => handleLoginGoogle()} className='login-google'>
            <Google width='24' height='24' /> Войти через гугл
          </button>
          <hr className='login-divider' />
          Забыли пароль?
          <Link to='/resetpassword' className='login-bottom__register'>
            Сбросить пароль
          </Link>
          <div className='login-bottom'>
            <hr className='login-divider' />
            <p className='login-bottom__description'>Если у вас нет аккаунта, пройдите регистрацию.</p>
            <Link to='/signup' className='login-bottom__register'>
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
