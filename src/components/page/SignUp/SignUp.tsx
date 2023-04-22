import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../../common/Form/Form';
import './SignUp.scss';

export default function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate('/login');
      })
      .catch(console.error);
  };

  return (
    <div className='signup'>
      <div className='signup-wrapper'>
        <div className='signup-content'>
          <div className='signup-top'>
            <h3 className='signup-top__title'>Регистрация</h3>
          </div>
          <div className='signup-form'>
            <Form title='Зарегистрироваться' handleClick={handleRegister} />
          </div>
          <div className='signup-bottom'>
            <p className='signup-bottom__description'>Если вы уже зарегистрированы, войдите в свой аккаунт.</p>
            <Link to='/login' className='signup-bottom__register'>
              Авторизация
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
