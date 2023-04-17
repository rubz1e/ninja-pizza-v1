export interface NinjaPizza {
  id: number;
  imageUrl: string;
  nameUrl: string;
  title: string;
  description: string;
  sizes: number;
  weight: number;
  price: number;
  category: number[];
  rating: number;
  newProduct?: boolean;
}

export type CategoryType = 'pizza' | 'drinks' | 'desserts' | 'supplements';

export interface CategoryFilterType {
  sortField?: string;
  sortDir?: string;
  query?: string;
  limit?: string;
  page?: string;
}
