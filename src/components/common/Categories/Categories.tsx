import React from 'react';

import './Categories.scss';

import Alls from '../../../assets/categories/pizza2x.webp';
import Spicy from '../../../assets/categories/spicyFilter.png';
import Meat from '../../../assets/categories/meatFilter.png';
import WithoutMeat from '../../../assets/categories/withoutMeatFilter.png';
import Fish from '../../../assets/categories/fishFilter.png';

export default function Categories() {
  const [isActiveIndex, setIsActiveIndex] = React.useState(0);

  const categories = [
    { type: 'Все', img: Alls },
    { type: 'Острые', img: Spicy },
    { type: 'Мясные', img: Meat },
    { type: 'Вегетарианские', img: WithoutMeat },
    { type: 'Морепродукты', img: Fish },
  ];

  const onClickCategories = (index: React.SetStateAction<number>) => {
    setIsActiveIndex(index);
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onClickCategories(index)} className={isActiveIndex === index ? 'active' : ''}>
            <img src={category.img} alt={category.type} />
            <p>{category.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
