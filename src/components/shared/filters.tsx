'use client';

import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '@/components/shared';
import { Input } from '@/components/ui';
import { RangeSlider } from './range-slider';
import { useFilterColors } from '../../../hooks/useFilterColors';

interface Props {
  className?: string;
}

interface PriceProps {
  priceForm: number;
  priceTo: number;
}

export const Filters: FC<Props> = ({ className }) => {
  const { colors, defaultColors, loading, onAddId, selectedIds } = useFilterColors();
  const [prices, setPrice] = useState<PriceProps>({ priceForm: 0, priceTo: 30000 });
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };
  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className=' font-bold' />

      <div className='flex flex-col gap-4 border-b  py-6 pb-7'>
        <FilterCheckbox text='В наличии' value={'99'} />
      </div>

      <div className='border-b py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={30000}
            value={String(prices.priceForm)}
            onChange={(e) => updatePrice('priceForm', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='30000'
            min={0}
            max={30000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={30000}
          step={100}
          value={[prices.priceForm, prices.priceTo]}
          onValueChange={([priceForm, priceTo]) => setPrice({ priceForm, priceTo })}
        />
      </div>

      <div className=' border-b  py-6 pb-7'>
        <CheckboxFiltersGroup
          name='sizes'
          title='Размеры'
          className=''
          loading={false}
          limit={7}
          items={[
            { text: '25 EU | 24 RU', value: '25' },
            { text: '26 EU | 25 RU', value: '26' },
            { text: '27 EU | 26 RU', value: '27' },
            { text: '28 EU | 27 RU', value: '28' },
            { text: '29 EU | 28 RU', value: '29' },
            { text: '30 EU | 29 RU', value: '30' },
            { text: '31 EU | 30 RU', value: '31' },
            { text: '32 EU | 31 RU', value: '32' },
            { text: '33 EU | 32 RU', value: '33' },
            { text: '34 EU | 33 RU', value: '34' },
            { text: '35 EU | 34 RU', value: '35' },
            { text: '36 EU | 35 RU', value: '36' },
            { text: '37 EU | 36 RU', value: '37' },
            { text: '38 EU | 37 RU', value: '38' },
            { text: '39 EU | 38 RU', value: '39' },
            { text: '40 EU | 39 RU', value: '40' },
            { text: '41 EU | 40 RU', value: '41' },
            { text: '42 EU | 41 RU', value: '42' },
            { text: '43 EU | 42 RU', value: '43' },
            { text: '44 EU | 43 RU', value: '44' },
            { text: '45 EU | 44 RU', value: '45' },
            { text: '46 EU | 45 RU', value: '46' },
          ]}
          defaultItems={[
            { text: '37 EU | 36 RU', value: '37' },
            { text: '38 EU | 37 RU', value: '38' },
            { text: '39 EU | 38 RU', value: '39' },
            { text: '40 EU | 39 RU', value: '40' },
            { text: '41 EU | 40 RU', value: '41' },
            { text: '42 EU | 41 RU', value: '42' },
            { text: '43 EU | 42 RU', value: '43' },
          ]}

          //onClickCheckbox={toggleSizes}
        />
      </div>

      <CheckboxFiltersGroup
        name='colors'
        title='Цвет'
        className='mt-5'
        limit={2}
        items={colors}
        defaultItems={defaultColors}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
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
