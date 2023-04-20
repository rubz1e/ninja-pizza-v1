import { useEffect, useState } from 'react';

import './Product.scss';

import Categories from '../../common/Categories/Categories';
import Sort from '../../common/Sort/Sort';

import { ProductProps } from '../../../type/productProps';
import { NinjaPizza } from '../../../type/categoryTypes';
import ProductCard from '../../common/ProductCard/ProductCard';
import getCategoryItem from '../../../api/categories/getCategoryItem';
import Skeleton from '../../common/Skeleton/Skeleton';

import Pagination from '../../common/Pagination/Pagination';

export default function Product({ title, category }: ProductProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoryList, setIsCategoryList] = useState<NinjaPizza[]>([]);
  const [isSortType, setIsSortType] = useState({
    name: 'Популярности',
    sortField: 'rating',
  });
  const [isCategoryId, setIsCategoryId] = useState(0);
  const [isCurrentPage, setIsCurrentPage] = useState(1);

  const skeletonList = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  const productList = isCategoryList.map((obj, id) => <ProductCard key={id} {...obj} />);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const filter = 'category';
      const response = await getCategoryItem(category, filter, isCurrentPage, isCategoryId, isSortType);
      setIsCategoryList(response.data);
      setIsLoading(false);
      console.log(isCategoryId);
    };
    fetchData();
  }, [isSortType, isCategoryId, category, isCurrentPage]);

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
            {category === 'pizza' && (
              <Categories categoryName={isCategoryId} onClickCategory={(i) => setIsCategoryId(i)} />
            )}
            <Sort
              value={isSortType}
              onChangeSort={(obj: any) => setIsSortType({ name: obj.name, sortField: obj.sortField })}
            />
          </div>
          <div className='category-list'>{isLoading ? skeletonList : productList}</div>
          <Pagination onChangePage={(page: number) => setIsCurrentPage(page)} />
        </div>
      </div>
    </div>
  );
}
