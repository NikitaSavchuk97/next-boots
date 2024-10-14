import { ProductItem } from '@prisma/client';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMinPrice = (productItems: ProductItem[]) => {
  if (productItems.length === 0) return '∞';

  return productItems.reduce((min, product) => {
    return product.price < min ? product.price : min;
  }, productItems[0].price);
};
