import axios from 'axios';
import { NinjaPizza, CategoryType } from '../../type/categoryTypes';

const getCategoryItem = async (type: CategoryType, id: NinjaPizza) => {
  await new Promise((resolve) => setTimeout(resolve, 0));

  const URL_API = `https://ninja-food-db.vercel.app/${type}/${id}`;
  return axios<NinjaPizza[]>({
    method: 'GET',
    url: URL_API,
  });
};

export default getCategoryItem;
