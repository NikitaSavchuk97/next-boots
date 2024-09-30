import { Product } from '@prisma/client';
import { useEffect, useState } from 'react';
import { Api } from '../services/api-client';

type ProductItem = Pick<Product, 'id' | 'name'>;

interface ReturnProps {
  colors: { value: number; text: string }[]; // Массив всех цветов
  defaultColors: { value: number; text: string }[]; // Массив только с белым и черным
  loading: boolean;
}

export const useFilterColors = (): ReturnProps => {
  const [colors, setColors] = useState<ReturnProps['colors']>([]);
  const [defaultColors, setDefaultColors] = useState<ReturnProps['defaultColors']>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      Api.products
        .searchProducts('')
        .then((data) => {
          // Создаем массив объектов с id и name
          const colorItems = data.map((item, index) => ({ value: index, text: item.mainColorRU }));

          // Фильтруем дубликаты по полю name
          const uniqueColors = colorItems.filter(
            (color, index, self) => index === self.findIndex((c) => c.text === color.text),
          );

          // Сортируем массив по алфавиту и делаем первую букву заглавной
          const sortedColors = uniqueColors
            .map((color) => ({
              value: color.value,
              text: color.text.charAt(0).toUpperCase() + color.text.slice(1),
            }))
            .sort((a, b) => a.text.localeCompare(b.text));

          // Фильтруем только белый и черный цвета
          const filteredBlackAndWhite = sortedColors.filter(
            (color) =>
              color.text.toLowerCase() === 'белый' || color.text.toLowerCase() === 'черный',
          );

          // Устанавливаем состояния
          setColors(sortedColors);
          setDefaultColors(filteredBlackAndWhite);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { colors, defaultColors, loading };
};
