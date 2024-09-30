'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '@/components/shared';
import { Input } from '@/components/ui';
import { RangeSlider } from './range-slider';
import { useFilterColors } from '../../../hooks/useFilterColors';

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const { colors, defaultColors, loading } = useFilterColors();

  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='В наличии' value={99} />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={30000} defaultValue={0} />
          <Input type='number' placeholder='30000' min={0} max={30000} defaultValue={30000} />
        </div>

        <RangeSlider min={0} max={30000} step={100} value={[0, 30000]} />
      </div>

      <CheckboxFiltersGroup
        title='Цвет'
        className='mt-5'
        items={colors}
        defaultItems={defaultColors}
        loading={loading}
      />
    </div>
  );
};

// [
// 	{ text: 'Белый', value: '1' },
// 	{ text: 'Бордовый', value: '2' },
// 	{ text: 'Голубой', value: '3' },
// 	{ text: 'Желтый', value: '4' },
// 	{ text: 'Зеленый', value: '5' },
// 	{ text: 'Коричневый', value: '6' },
// 	{ text: 'Красный', value: '7' },
// 	{ text: 'Малиновый', value: '8' },
// 	{ text: 'Оранжевый', value: '9' },
// 	{ text: 'Розовый', value: '10' },
// 	{ text: 'Синий', value: '11' },
// 	{ text: 'Сиреневый', value: '12' },
// 	{ text: 'Темно-синий', value: '13' },
// 	{ text: 'Фиолетовый', value: '14' },
// 	{ text: 'Черный', value: '15' },
// ]

// [
// 	{ text: 'Белый', value: '1' },
// 	{ text: 'Черный', value: '2' },
// 	{ text: 'Синий', value: '3' },
// 	{ text: 'Красный', value: '4' },
// 	{ text: 'Желтый', value: '5' },
// 	{ text: 'Зеленый', value: '6' },
// 	{ text: 'Коричневый', value: '7' },
// 	{ text: 'Фиолетовый', value: '8' },
// ]
