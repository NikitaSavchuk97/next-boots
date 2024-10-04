'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui';
import { RangeSlider } from './range-slider';
import { ClassNamePropsTypes } from '@/lib/types';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '@/components/shared';
import { useQueryParams, useFilters, useColors, useBrands } from '../../../hooks';

export const Filters: FC<ClassNamePropsTypes> = ({ className }) => {
  const filters = useFilters();
  const { colors, defaultColors } = useColors();
  const { brands, defaultBrands, loading } = useBrands();

  useQueryParams(filters);

  const updatePrice = (prices: number[]) => {
    filters.setPrice('priceFrom', prices[0]);
    filters.setPrice('priceTo', prices[1]);
  };

  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className='mt-2 font-bold' />

      <div className='flex flex-col gap-4 border-b  py-6 pb-7'>
        <FilterCheckbox
          text='В наличии'
          value={'stock'}
          checked={filters.inStock === 'true' ? true : false}
          onCheckedChange={() =>
            filters.setInStock(filters.inStock === 'true' ? undefined : 'true')
          }
        />
      </div>

      <div className=' border-b  py-6 pb-7'>
        <CheckboxFiltersGroup
          name='gender'
          title='Пол'
          className=''
          loading={false}
          selected={filters.gender}
          onClickCheckbox={filters.setGender}
          limit={3}
          items={[
            { text: 'Мужчины', value: 'male' },
            { text: 'Женщины', value: 'female' },
            { text: 'Унисекс', value: 'unisex' },
          ]}
        />
      </div>

      <div className='border-b py-6 pb-7'>
        <p className='font-bold mb-3'>Цена</p>
        <div className='flex gap-3 mb-5'>
          <Input
            placeholder='0'
            type='number'
            min={0}
            max={30000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrice('priceFrom', Number(e.target.value))}
          />
          <Input
            placeholder='30000'
            type='number'
            min={0}
            max={30000}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={30000}
          step={100}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 30000]}
          onValueChange={updatePrice}
        />
      </div>

      <div className=' border-b  py-6 pb-7'>
        <CheckboxFiltersGroup
          name='brand'
          title='Бренд'
          className=''
          items={brands}
          defaultItems={defaultBrands}
          loading={loading}
          onClickCheckbox={filters.setBrand}
          selected={filters.selectedBrands}
        />
      </div>

      <div className=' border-b  py-6 pb-7'>
        <CheckboxFiltersGroup
          name='colors'
          title='Цвет'
          className=''
          limit={2}
          items={colors}
          defaultItems={defaultColors}
          loading={loading}
          onClickCheckbox={filters.setColors}
          selected={filters.selectedColors}
        />
      </div>

      <div className=' border-b  py-6 pb-7'>
        <CheckboxFiltersGroup
          search={false}
          name='sizes'
          title='Размеры'
          className=''
          loading={false}
          limit={7}
          selected={filters.sizes}
          onClickCheckbox={filters.setSize}
          items={sizeArr}
          defaultItems={defaultSizeArr}
        />
      </div>
    </div>
  );
};

const sizeArr = [
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
  { text: '47 EU | 46 RU', value: '47' },
];

const defaultSizeArr = [
  { text: '37 EU | 36 RU', value: '37' },
  { text: '38 EU | 37 RU', value: '38' },
  { text: '39 EU | 38 RU', value: '39' },
  { text: '40 EU | 39 RU', value: '40' },
  { text: '41 EU | 40 RU', value: '41' },
  { text: '42 EU | 41 RU', value: '42' },
  { text: '43 EU | 42 RU', value: '43' },
];
