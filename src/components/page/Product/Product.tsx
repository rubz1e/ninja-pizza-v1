import { SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Product.scss';

import Categories from '../../common/Categories/Categories';
import Sort from '../../common/Sort/Sort';

import { ProductProps } from '../../../type/productProps';
import { NinjaPizza } from '../../../type/categoryTypes';
import ProductCard from '../../common/ProductCard/ProductCard';
import Skeleton from '../../common/Skeleton/Skeleton';

import Pagination from '../../common/Pagination/Pagination';
import { setCategoryId, setCurrentPage } from '../../../redux/slices/filterSlice';
import getCategoryItems from '../../../api/categories/getCategoryItems';

export default function Product({ title, category }: ProductProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoryList, setIsCategoryList] = useState<NinjaPizza[]>([]);
  const { isCategoryId, isCurrentPage, isSortType } = useSelector((state: unknown) => (state as any).filter);
  const dispatch = useDispatch();

  const onClickCategory = (id: any) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (num: number) => {
    dispatch(setCurrentPage(num));
  };

  const skeletonList = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  const productList = isCategoryList.map((obj, id) => <ProductCard key={id} {...obj} />);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const filter = 'category';
      const response = await getCategoryItems(category, filter, isCurrentPage, isCategoryId, isSortType);
      setIsCategoryList(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [isSortType, isCategoryId, category, isCurrentPage, dispatch]);

  return (
    <div className="category">
      <div className="category-wrapper">
        <div className="category-top">
          <div className="category-title">
            <h2 className="category-name">{title}</h2>
          </div>
        </div>
        <div className="category-content">
          <div className="category-options">
            {category === 'pizza' && (
              <Categories categoryName={isCategoryId} onClickCategory={(i) => onClickCategory(i)} />
            )}
            <Sort />
          </div>
          <div className="category-list">{isLoading ? skeletonList : productList}</div>
          <Pagination currentPage={isCurrentPage} onChangePage={onChangePage} />
        </div>
      </div>
    </div>
  );
}
