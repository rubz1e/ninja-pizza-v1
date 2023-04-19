import { CategoryType } from './categoryTypes';

export interface ProductCategoryProps {
  getElement: CategoryType;
  numberToShow?: number;
}

export interface ProductProps {
  title: string;
  category: CategoryType;
}

export interface ProductListProps {
  id: string;
  title: string;
  category: CategoryType;
}
