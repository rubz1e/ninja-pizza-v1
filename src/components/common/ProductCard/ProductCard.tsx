import React from 'react';

import './ProductCard.scss';

import { NinjaPizza } from '../../../type/categoryTypes';

import { ReactComponent as Favorite } from '../../../assets/favorite.svg';
import Spicy from '../../../assets/categories/spicyFilter.png';
import Vegan from '../../../assets/categories/withoutMeatFilter.png';

export default function ProductCard({
  imageUrl,
  nameUrl,
  title,
  description,
  sizes,
  weight,
  volume,
  price,
  category,
  newProduct,
}: NinjaPizza) {
  return (
    <>
      <div className='product-card'>
        <div className='product-card__top'>
          <div className='product-card__species-top'>
            <div className='product-card__status'>
              {newProduct && (
                <div className='product-card__new'>
                  <span>NEW</span>
                </div>
              )}
            </div>
            <div className='product-card__favorite'>
              <Favorite />
            </div>
          </div>
          <div className='product-card__image'>
            <img src={imageUrl} alt={nameUrl} />
          </div>
          <div className='product-card__species-bottom'>
            {category === 1 ? (
              <div className='product-card__spice'>
                <img src={Spicy} alt='' width='24' height='24' />
              </div>
            ) : category === 3 ? (
              <div className='product-card__vegan'>
                <img src={Vegan} alt='' width='24' height='24' />
              </div>
            ) : null}
          </div>
        </div>
        <div className='product-card__wrapper'>
          <div className='product-card__content'>
            <a href='/' className='product-card__title'>
              {title}
            </a>
            <div className='product-card__consist'>
              <span className='product-card__weight'>
                {sizes ? `${sizes} см/` : ''}
                {weight ? `${weight} г — ` : `${volume} г`}
              </span>
              <span className='product-card__description'>{description}</span>
            </div>
          </div>
          <div className='product-card__bottom'>
            <div className='product-card__price'>
              <span>{price}</span>
              <span className='product-card__currency'>грн</span>
            </div>
            <button className='product-card__button'>Заказать</button>
          </div>
        </div>
      </div>
    </>
  );
}
