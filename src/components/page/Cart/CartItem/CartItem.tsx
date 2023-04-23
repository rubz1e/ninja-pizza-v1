import React from 'react';
import { NinjaPizza } from '../../../../type/categoryTypes';

import { ReactComponent as Close } from '../../../../assets/burgerMenu/open.svg';
import { ReactComponent as Minus } from '../../../../assets/minusButton.svg';
import { ReactComponent as Plus } from '../../../../assets/plusButton.svg';

export default function CartItem({ imageUrl, title, sizes, weight, volume, price }: NinjaPizza) {
  return (
    <>
      <div className='cart-items'>
        <div className='cart-item '>
          <div className='cart-item__remove'>
            <Close width='20' height='20' />
          </div>
          <div className='cart-item__content'>
            <div className='cart-item__image'>
              <img src={imageUrl} alt='' />
            </div>
            <div className='cart-item__info'>
              <div className='cart-item__name'>{title}</div>
              <div className='cart-item__weight'>
                {sizes ? `${sizes} см / ` : ''}
                {weight ? `${weight} г ` : `${volume} г`}
              </div>
              <div className='cart-item__bottom'>
                <div className='cart-item__price'>
                  <p>{price}</p>
                  <span className='cart-item__currency'>грн</span>
                </div>
                <div className='cart-item__controls'>
                  <div className='cart-item__control cart-item__minus'>
                    <Minus width='20' height='20' />
                  </div>
                  <div className='cart-item__count'>9</div>
                  <div className='cart-item__control cart-item__plus'>
                    <Plus width='20' height='20' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
