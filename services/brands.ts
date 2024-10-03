import { instance } from './instance';
import { ApiRoutes } from './constants';

export const getBrands = async (): Promise<{ brand: string }[]> => {
  const { data } = await instance.get(ApiRoutes.GET_BRANDS);
  return data;
};
