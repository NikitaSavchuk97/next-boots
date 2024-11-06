import { prisma } from '@/prisma/prisma-client';
import { ProductGender } from '@prisma/client';

export interface GetSearchParams {
  query: string;
  sortBy: string;

  bootType: string;
  gender: string;
  priceFrom: string;
  priceTo: string;
  brand: string;
  color: string;
  size: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 100000;

export const findProduct = async (params: GetSearchParams) => {
  const sizes = params.size?.split(',').map(Number) || [];
  const bootTypes = params.bootType?.split(',').map(Number) || [];
  const brand = params.brand?.split(',').map(String) || [];
  const colors = params.color?.split(',').map(String) || [];
  const genders =
    params.gender?.split(',').map((gender) => {
      return gender as ProductGender;
    }) || [];

  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: 'desc',
        },
        where: {
          mainColorEN: {
            in: colors.length > 0 ? colors : undefined,
          },
          male: {
            in: genders.length > 0 ? genders : undefined,
          },
          brand: {
            in: brand.length > 0 ? brand : undefined,
          },
          items: {
            some: {
              size: {
                in: sizes.length > 0 ? sizes : undefined,
              },
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
          },
        },
        include: {
          items: true,
          // items: {
          //   orderBy: {
          //     price: 'asc',
          //   },
          // },
        },
      },
    },
  });

  return categories;
};