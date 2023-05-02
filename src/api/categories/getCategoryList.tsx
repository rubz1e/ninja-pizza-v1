import axios from 'axios';
import { NinjaPizza, CategoryType, CategoryFilterType } from '../../type/categoryTypes';

const getCategoryList = async (element: CategoryType, filter: CategoryFilterType) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  const URL_API = `http://localhost:3001/${element}`;
  const defaultParams = {
    _sort: filter.sortField,
    _order: filter.sortDir,
    q: filter.query,
    _page: filter.page,
    _limit: filter.limit,
  };
  const params = { ...defaultParams };
  return axios<NinjaPizza[]>({
    method: 'GET',
    url: URL_API,
    params,
  });
};

export default getCategoryList;
