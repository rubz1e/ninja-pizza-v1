import React from 'react';
import './Sort.scss';

import { ReactComponent as Arrow } from '../../../assets/arrow.svg';

export default function Sort() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelecte, setIsSelected] = React.useState(0);
  const categories = ['Популярности', 'Цене', 'Алфавиту'];
  const sortNames = categories[isSelecte];
  const onClickSelected = (index: any) => {
    setIsSelected(index);
    setIsOpen(!isOpen);
  };

  return (
    <div className='sort'>
      <div className='sort-wrapper'>
        <div className='sort-label'>
          <Arrow />
          <b>Сортировка по:</b>
          <span onClick={() => setIsOpen(!isOpen)}>{sortNames}</span>
        </div>
        {isOpen && (
          <div className='sort-popup'>
            <ul>
              {categories.map((category, index) => (
                <li key={index} onClick={() => onClickSelected(index)} className={isSelecte === index ? 'active' : ''}>
                  <p>{category}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
