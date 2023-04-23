import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../../redux/slices/filterSlice';

import './Sort.scss';

import { ReactComponent as Arrow } from '../../../assets/arrow.svg';

export default function Sort() {
  const sort = useSelector((state: unknown) => (state as any).filter.isSortType);
  const dispatch = useDispatch();

  const sortRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const categories = [
    { name: 'Популярности', sortField: 'rating' },
    { name: 'Цене (с дешевых)', sortField: '-price' },
    { name: 'Цене (с дорогих)', sortField: 'price' },
  ];

  const onClickSelected = (obj: any) => {
    dispatch(setSort(obj));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const path = event.composedPath();
      if (!path.includes(sortRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort-wrapper'>
        <div className='sort-label'>
          <Arrow />
          <b>Сортировка по: </b>
          <div className='sort-label_name' onClick={() => setIsOpen(!false)}>
            <span className='sort-open'>{sort.name}</span>
          </div>
        </div>
        {isOpen && (
          <div className='sort-popup'>
            <ul>
              {categories.map((obj, index) => (
                <li
                  key={index}
                  onClick={() => onClickSelected(obj)}
                  className={sort.sortField === obj.sortField ? 'active' : ''}
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
