import { useSet } from 'react-use';
import { useEffect, useState } from 'react';
import { Api } from '../services/api-client';

interface ReturnProps {
  brands: { value: string; text: string }[]; // Массив всех брендов
  defaultBrands: { value: string; text: string }[]; // Массив только с определенными брендами
  selectedBrands: Set<string>;
  onAddBrandValue: (id: string) => void;
  loading: boolean;
}

export const useFilterBrands = (brandsSelectedBeforeReload: string[] = []): ReturnProps => {
  const [brands, setBrands] = useState<ReturnProps['brands']>([]);
  const [defaultBrands, setDefaultBrands] = useState<ReturnProps['defaultBrands']>([]);
  const [selectedBrands, { toggle }] = useSet(new Set<string>(brandsSelectedBeforeReload));
  const [loading, setLoading] = useState(true);
  const defaultItems = ['nike', 'adidas', 'puma', 'reebok', 'vans'];

  const capitalizeWords = (str: string) => {
    return str
      .split(' ') // Разбиваем строку на слова
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Делаем первую букву заглавной
      .join(' '); // Объединяем слова обратно в строку
  };

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
  return { brands, defaultBrands, loading, onAddBrandValue: toggle, selectedBrands };
};
