import React, { useEffect } from 'react';
import './MainCategoryList.scss';

import getCategoryList from '../../../../api/categories/getCategoryList';
import { NinjaPizza, CategoryType } from '../../../../type/categoryTypes';
import ProductCard from '../../../common/ProductCard/ProductCard';
import Skeleton from '../../../common/Skeleton/Skeleton';

interface MainCategoryListProps {
  getElement: CategoryType;
}

export default function MainCategoryList({ getElement }: MainCategoryListProps) {
  const [isCategoryList, setIsCategoryList] = React.useState<NinjaPizza[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const filter = {
        sortField: 'id',
      };
      const response = await getCategoryList(getElement, filter);
      setIsCategoryList(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [getElement]);

  return (
    <>
      {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : isCategoryList.slice(0, 8).map((obj, id) => <ProductCard key={id} {...obj} />)}
    </>
  );
}
