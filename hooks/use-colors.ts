import { useEffect, useState } from 'react';
import { Api } from '../services/api-client';
import { ColorsReturnPropsTypes } from '@/lib/types';

export const useColors = (): ColorsReturnPropsTypes => {
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState<ColorsReturnPropsTypes['colors']>([]);
  const [defaultColors, setDefaultColors] = useState<ColorsReturnPropsTypes['defaultColors']>([]);

  useEffect(() => {
    try {
      setLoading(true);
      Api.getColors
        .getColors()
        .then((data) => {
          // Создаем массив объектов с value и text
          const colorItems = data.map((item) => ({
            value: item.mainColorEN,
            text: item.mainColorRU,
          }));

          // Сортируем массив по алфавиту и делаем первую букву заглавной
          const sortedColors = colorItems
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
