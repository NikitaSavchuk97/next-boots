import { instance } from './instance';
import { ApiRoutes } from './constants';

export const getCart = async (): Promise<any> => {
  const { data } = await instance.get(ApiRoutes.CART);
  return data;
};

export const removeCartItem = async (id: number): Promise<any> => {
  const { data } = await instance.delete(ApiRoutes.CART + '/' + id);
  return data;
};

export const addCartItem = async (id: number): Promise<any> => {
  const { data } = await instance.post(ApiRoutes.CART, id);
  return data;
};
