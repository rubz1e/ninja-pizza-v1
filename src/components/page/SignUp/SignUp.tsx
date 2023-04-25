import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../../common/Form/Form';
import './SignUp.scss';
import AuthModal from '../AuthModal/AuthModal';

export default function SignUp() {
  const dispatch = useAppDispatch();
  const [isShowModal, setIsShowModal] = useState(false);

  const handleLoginClick = () => {
    setIsShowModal(true);
  };

  const handleClose = () => {
    setIsShowModal(false);
  };

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
      })
      .catch();
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
            <hr className='signup-divider' />
            <button onClick={handleLoginClick} className='signup-bottom__register'>
              Авторизация
            </button>
            {isShowModal && <AuthModal onClose={handleClose} />}
          </div>
        </div>
      </div>
    </div>
  );
}
