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
}

export interface CategoryType {
  pizza: string;
  drinks: string;
  desserts: string;
  supplements: string;
}

export interface CategoryFilterType {
  sortField: string;
  sortDir: string;
  query: string;
  limit: string;
  page: string;
}
