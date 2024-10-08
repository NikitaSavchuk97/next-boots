import { Product } from '@prisma/client';
import { instance } from './instance';
import { ApiRoutes } from './constants';

export const getSearchProducts = async (query: string): Promise<Product[]> => {
  const { data } = await instance.get<Product[]>(ApiRoutes.GET_SEARCH_PRODUCTS, {
    params: { query },
  });
  return data;
};
