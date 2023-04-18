import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';
import { ReactComponent as RoutingError } from '../../../assets/notFound.svg';

export default function NotFound() {
  return (
    <div className='notfound'>
      <div className='notfound-wrapper'>
        <div className='notfound-content'>
          <RoutingError />
          <h2 className='notfound-title'>Ошибка 404 😕</h2>
          <h2 className='notfound-title'>Что-то пошло не так</h2>
          <p className='notfound-description'>Страница, которую вы ищите, отсутствует либо на стадии разработки 🚧</p>
          <Link to='/' className='notfound-button'>
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
