import { instance } from './instance';
import { ApiRoutes } from './constants';

export const getColors = async (): Promise<{ mainColorEN: string; mainColorRU: string }[]> => {
  const { data } = await instance.get(ApiRoutes.GET_COLORS);
  return data;
};
