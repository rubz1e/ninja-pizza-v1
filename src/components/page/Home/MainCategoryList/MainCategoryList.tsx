import React, { useEffect } from 'react';
import './MainCategoryList.scss';

import getCategoryList from '../../../../api/categories/getCategoryList';
import { NinjaPizza, CategoryType } from '../../../../type/categoryTypes';
import ProductCard from '../../../common/ProductCard/ProductCard';

interface MainCategoryListProps {
  getElement: CategoryType;
}

export default function MainCategoryList({ getElement }: MainCategoryListProps) {
  const [isCategoryList, setIsCategoryList] = React.useState<NinjaPizza[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const filter = {
        sortField: 'id',
      };
      const response = await getCategoryList(getElement, filter);
      setIsCategoryList(response.data);
    };
    fetchData();
  }, [getElement]);

  return (
    <>
      {isCategoryList.slice(0, 8).map((obj, id) => (
        <ProductCard key={id} {...obj} />
      ))}
    </>
  );
}
