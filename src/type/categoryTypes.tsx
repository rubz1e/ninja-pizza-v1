export interface NinjaPizza {
  type: string;
  id: number;
  imageUrl: string;
  nameUrl: string;
  title: string;
  description?: string;
  sizes?: number;
  weight?: number;
  volume?: number;
  price: number;
  category: number;
  rating: number;
  newProduct?: boolean;
  hit?: boolean;
}

export type CategoryType = 'pizza' | 'drinks' | 'desserts' | 'sausec';

export interface CategoryFilterType {
  sortField?: string;
  sortDir?: string;
  query?: string;
  limit?: string;
  page?: string;
}
