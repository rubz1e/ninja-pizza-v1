import React, { useEffect, useState } from 'react';

import './Cart.scss';

import CartEmpty from './CartEmpty/CartEmpty';
import CartItem from './CartItem/CartItem';
import CartTotal from './CartTotal/CartTotal';
import { NinjaPizza } from '../../../type/categoryTypes';
import getCategoryList from '../../../api/categories/getCategoryList';
import CartHeader from './CartHeader/CartHeader';

export default function Cart({ cartitem }: any) {
  const [isCategoryItem, setIsCategoryItem] = useState<NinjaPizza[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const filter = {};
      const response = await getCategoryList('pizza', filter);
      setIsCategoryItem(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className='cart'>
      <div className='cart-wrapper'>
        <CartHeader />
        {isCategoryItem.length > 0 ? (
          <div className='cart-items'>
            {isCategoryItem.map((obj: NinjaPizza) => (
              <CartItem key={obj.id} {...obj} />
            ))}
          </div>
        ) : (
          <CartEmpty />
        )}
        <CartTotal />
      </div>
    </div>
  );
}
