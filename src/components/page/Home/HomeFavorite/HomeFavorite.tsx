import React from 'react';

import { ReactComponent as FavoriteSVG } from '../../../../assets/favoriteIcon.svg';

export default function HomeFavorite() {
  return (
    <div className='home-favorite'>
      <h2 className='home-title'>Избранные товары</h2>
      <div className='home-bottom'>
        <div className='home-bottom__card'>
          <div className='home-bottom__left'>
            <FavoriteSVG width='224' height='170' />
          </div>
          <div className='home-bottom__right'>
            <h3 className='home-bottom__right-title'>Вы еще ничего не добавили в избанное</h3>
            <p className='home-bottom__right-description'>
              Переходите в интересующую вас категорию и отмечайте понравившиеся
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
