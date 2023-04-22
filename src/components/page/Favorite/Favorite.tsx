import React from 'react';
import './Favorite.scss';

import { ReactComponent as FavoriteSVG } from '../../../assets/favoriteIcon.svg';

export default function Favorite() {
  return (
    <div className='favorite'>
      <div className='favorite-wrapper'>
        <div className='favorite-top'>
          <h2 className='favorite-top__title'>Избранные товары</h2>
        </div>
        <div className='favorite-bottom'>
          <div className='favorite-bottom__card'>
            <div className='favorite-bottom__left'>
              <FavoriteSVG width='224' height='170' />
            </div>
            <div className='favorite-bottom__right'>
              <h3 className='favorite-bottom__right-title'>Вы еще ничего не добавили в избанное</h3>
              <p className='favorite-bottom__right-description'>
                Переходите в интересующую вас категорию и отмечайте понравившиеся
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
