import './ProductList.scss';
import MainCategoryList from '../MainCategoryList/MainCategoryList';
import { CategoryType } from '../../../../type/categoryTypes';

interface ProductListProps {
  id: string;
  title: string;
  category: CategoryType;
}

export default function ProductList({ id, title, category }: ProductListProps) {
  return (
    <div className='product-list' id={id}>
      <div className='product-list__top'>{title}</div>
      <div className='product-list__wrapper'>
        <div className='product-list__content'>
          <div className='product-list__temp'>
            <MainCategoryList getElement={category} />
          </div>
        </div>
      </div>
      <div className='product-list__bottom'>
        <a href={`/${category}`} className='product-list__button'>
          Смотреть все
        </a>
      </div>
    </div>
  );
}
