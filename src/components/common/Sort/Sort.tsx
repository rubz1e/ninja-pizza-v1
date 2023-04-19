import React from 'react';
import './Sort.scss';

import { ReactComponent as Arrow } from '../../../assets/arrow.svg';

interface SortProps {
  value: { name: string; sortField: string };
  onChangeSort: (categoryNumber: number) => void;
}

export default function Sort({ value, onChangeSort }: SortProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const categories = [
    { name: 'Популярности', sortField: 'rating' },
    { name: 'Цене (с дешевых)', sortField: '-price' },
    { name: 'Цене (с дорогих)', sortField: 'price' },
  ];
  const onClickSelected = (index: any) => {
    onChangeSort(index);
    setIsOpen(!isOpen);
  };

  return (
    <div className='sort'>
      <div className='sort-wrapper'>
        <div className='sort-label'>
          <Arrow />
          <b>Сортировка по: </b>
          <div className='sort-label_name' onClick={() => setIsOpen(!isOpen)}>
            <span className='sort-open'>{value.name}</span>
          </div>
        </div>
        {isOpen && (
          <div className='sort-popup'>
            <ul>
              {categories.map((obj, index) => (
                <li
                  key={index}
                  onClick={() => onClickSelected(obj)}
                  className={value.sortField === obj.sortField ? 'active' : ''}
                >
                  <p>{obj.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
