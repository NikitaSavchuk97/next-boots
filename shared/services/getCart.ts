import { instance } from './instance';
import { Cart } from '@/@types/types';
import { ApiRoutes } from './constants';

export const getCart = async (): Promise<Cart> => {
  const { data } = await instance.get<Cart>(ApiRoutes.GET_CART);
  return data;
};
