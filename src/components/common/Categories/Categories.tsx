import React from 'react';

import './Categories.scss';

import Spicy from '../../../assets/categories/spicyFilter.png';
import Meat from '../../../assets/categories/meatFilter.png';
import WithoutMeat from '../../../assets/categories/withoutMeatFilter.png';
import Fish from '../../../assets/categories/fishFilter.png';

export default function Categories() {
  const [isActiveIndex, setIsActiveIndex] = React.useState(Boolean);

  return (
    <div className='categories'>
      <div className='wrapper'>
        <ul>
          <li className='active '>
            <img src={Spicy} alt='' />
            <p>Острые</p>
          </li>
          <li>
            <img src={Meat} alt='' />
            <p>Мясные</p>
          </li>
          <li>
            <img src={WithoutMeat} alt='' />
            <p>Вегетарианские</p>
          </li>
          <li>
            <img src={Fish} alt='' />
            <p>Морепродукты</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
