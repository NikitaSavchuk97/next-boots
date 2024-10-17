import { ProductItem } from '@prisma/client';

/**
 * Функция для подсчета минимальной стоимости товара
 * @param productItems массив позиций товара с полем .price
 * @returns ```number``` минимальное числовое значение из переданного массива
 */

export const calculateMinPrice = (productItems: ProductItem[]) => {
  if (productItems.length === 0) return '∞';

  return productItems.reduce((min, product) => {
    return product.price < min ? product.price : min;
  }, productItems[0].price);
};
