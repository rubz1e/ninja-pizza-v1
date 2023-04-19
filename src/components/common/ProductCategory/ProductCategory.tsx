import { useEffect, useState } from 'react';

import getCategoryList from '../../../api/categories/getCategoryList';
import Skeleton from '../Skeleton/Skeleton';
import ProductCard from '../ProductCard/ProductCard';

import { NinjaPizza } from '../../../type/categoryTypes';
import { ProductCategoryProps } from '../../../type/productProps';

export default function ProductCategory({ getElement, numberToShow }: ProductCategoryProps) {
  const [isCategoryList, setIsCategoryList] = useState<NinjaPizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        : isCategoryList.slice(0, numberToShow).map((obj, id) => <ProductCard key={id} {...obj} />)}
    </>
  );
}
