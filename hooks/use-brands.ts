import { useEffect, useState } from 'react';
import { Api } from '../services/api-client';
import { BrandsReturnPropsTypes } from '@/lib/types';

export const useBrands = (): BrandsReturnPropsTypes => {
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState<BrandsReturnPropsTypes['brands']>([]);
  const [defaultBrands, setDefaultBrands] = useState<BrandsReturnPropsTypes['defaultBrands']>([]);

  const defaultItems = ['nike', 'adidas', 'puma', 'reebok', 'vans'];

  useEffect(() => {
    try {
      setLoading(true);
      Api.products
        .searchProducts('')
        .then((data) => {
          // Создаем массив объектов с value и text
          const brandItems = data.map((item, index) => item.brand);

          // Фильтруем дубликаты
          const uniqueBrands = brandItems.filter(
            (brand, index, self) => index === self.findIndex((b) => b === brand),
          );

          // Сортируем и капитализируем бренды
          const sortedBrands = uniqueBrands
            .map((brand) => ({
              value: brand,
              text: capitalizeWords(brand),
            }))
            .sort((a, b) => a.value.localeCompare(b.value));

          // Фильтруем только определенные бренды
          const filteredSpecificBrands = sortedBrands.filter((brand) =>
            defaultItems.includes(brand.value),
          );

          // Устанавливаем состояния
          setBrands(sortedBrands);
          setDefaultBrands(filteredSpecificBrands);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const capitalizeWords = (str: string) => {
    return str
      .split(' ') // Разбиваем строку на слова
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Делаем первую букву заглавной
      .join(' '); // Объединяем слова обратно в строку
  };

  return { brands, defaultBrands, loading };
};
