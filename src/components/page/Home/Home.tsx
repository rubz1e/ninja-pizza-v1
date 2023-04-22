import React from 'react';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { useAuth } from '../../../hooks/use-auth';
import { removeUser } from '../../../redux/slices/userSlice';
import { Navigate } from 'react-router-dom';

export default function Home() {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h2>Hello!</h2>
      <p>{email}</p>
      <button onClick={() => dispatch(removeUser())}>Выйти</button>
    </div>
  ) : (
    <>{!isAuth && <Navigate to='/login' />}</>
  );
}
