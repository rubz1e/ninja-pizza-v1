import React from 'react';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { useAuth } from '../../../hooks/use-auth';
import { removeUser } from '../../../redux/slices/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();

  const signOut = () => {
    dispatch(removeUser());
    navigate('/');
  };

  return isAuth ? (
    <div>
      <h2>Hello!</h2>
      <p>{email}</p>
      <button onClick={() => signOut()}>Выйти</button>
    </div>
  ) : (
    <>{!isAuth && <Navigate to='/login' />}</>
  );
}
