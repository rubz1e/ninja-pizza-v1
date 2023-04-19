import './Product.scss';

import Categories from '../../common/Categories/Categories';
import Sort from '../../common/Sort/Sort';
import ProductCategory from '../../common/ProductCategory/ProductCategory';

import { ProductProps } from '../../../type/productProps';

export default function Product({ title, category }: ProductProps) {
  return (
    <div className='category'>
      <div className='category-wrapper'>
        <div className='category-top'>
          <div className='category-title'>
            <h2 className='category-name'>{title}</h2>
          </div>
        </div>
        <div className='category-content'>
          <div className='category-options'>
            {category === 'pizza' && <Categories />}
            <Sort />
          </div>
          <div className='category-list'>
            <ProductCategory getElement={category} />
          </div>
        </div>
      </div>
    </div>
  );
}
