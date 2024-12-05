import { instance } from './instance';
import { ApiRoutes } from './constants';
import { User } from '@prisma/client';

export const getMe = async (): Promise<User> => {
  const { data } = await instance.get(ApiRoutes.GET_ME);
  return data;
};
