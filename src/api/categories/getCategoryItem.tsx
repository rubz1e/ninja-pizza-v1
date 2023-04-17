import axios from 'axios';
import { NinjaPizza, CategoryType } from '../../type/categoryTypes';

const getCategoryItem = async (type: CategoryType, nameUrl: NinjaPizza) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  const URL_API = `https://643c163770ea0e6602a1151a.mockapi.io/${type}/${nameUrl}`;
  return axios<NinjaPizza[]>({
    method: 'GET',
    url: URL_API,
  });
};

export default getCategoryItem;
