import axios from 'axios';
import { NinjaPizza, CategoryType } from '../../type/categoryTypes';

const getCategoryItem = async (
  type: CategoryType,
  filter?: string,
  isCurrentPage?: any,
  isFilterId?: any,
  isSortType?: any
) => {
  await new Promise((resolve) => setTimeout(resolve, 0));

  const categoryBy = isFilterId > 0 ? `${filter}=${isFilterId}` : '';
  const orderBy = isSortType.sortField.replace('-', '');
  const order = isSortType.sortField.includes('-') ? 'asc' : 'desc';

  const URL_API = `https://ninja-food-db.vercel.app/${type}?${categoryBy}&_sort=${orderBy}&_order=${order}&_page=${isCurrentPage}&_limit=8?`;
  return axios<NinjaPizza[]>({
    method: 'GET',
    url: URL_API,
  });
};

export default getCategoryItem;
