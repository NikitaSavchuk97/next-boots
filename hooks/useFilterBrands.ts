import { useEffect, useState } from 'react';
import { Api } from '../services/api-client';
import { useSet } from 'react-use';

interface ReturnProps {
  brands: { value: string; text: string }[]; // Массив всех брендов
  defaultBrands: { value: string; text: string }[]; // Массив только с определенными брендами
  selectedBrands: Set<string>;
  onAddBrandValue: (id: string) => void;
  loading: boolean;
}

export const useFilterBrands = (): ReturnProps => {
  const [brands, setBrands] = useState<ReturnProps['brands']>([]);
  const [defaultBrands, setDefaultBrands] = useState<ReturnProps['defaultBrands']>([]);
  const [selectedBrands, { toggle }] = useSet(new Set<string>([]));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      Api.products
        .searchProducts('')
        .then((data) => {
          // Создаем массив объектов с value и text
          const brandItems = data.map((item, index) => ({
            value: String(index),
            text: item.brand,
          }));

          // Фильтруем дубликаты по полю text
          const uniqueBrands = brandItems.filter(
            (brand, index, self) => index === self.findIndex((b) => b.text === brand.text),
          );

          // Сортируем массив по алфавиту и делаем первую букву заглавной
          const sortedBrands = uniqueBrands
            .map((brand) => ({
              value: brand.value,
              text: brand.text.charAt(0).toUpperCase() + brand.text.slice(1),
            }))
            .sort((a, b) => a.text.localeCompare(b.text));

          // Фильтруем только определенные бренды (например, Nike и Adidas)
          const defaultItems = ['nike', 'adidas', 'puma', 'reebok', 'vans'];
          const filteredSpecificBrands = sortedBrands.filter((brand) =>
            defaultItems.includes(brand.text.toLowerCase()),
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
