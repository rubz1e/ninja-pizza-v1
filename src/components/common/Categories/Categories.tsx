import React from 'react';

import './Categories.scss';

import Alls from '../../../assets/categories/pizza2x.webp';
import Spicy from '../../../assets/categories/spicyFilter.png';
import Meat from '../../../assets/categories/meatFilter.png';
import WithoutMeat from '../../../assets/categories/withoutMeatFilter.png';
import Fish from '../../../assets/categories/fishFilter.png';

interface CategoriesProps {
  categoryName: number;
  onClickCategory: (categoryNumber: number) => void;
}

export default function Categories({ categoryName, onClickCategory }: CategoriesProps) {
  const categories = [
    { type: 'Все', img: Alls },
    { type: 'Острые', img: Spicy },
    { type: 'Мясные', img: Meat },
    { type: 'Вегетарианские', img: WithoutMeat },
    { type: 'Морепродукты', img: Fish },
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={categoryName === i ? 'active' : ''}>
            <img src={category.img} alt={category.type} />
            <p>{category.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
