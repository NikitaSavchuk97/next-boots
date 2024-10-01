'use client';

import QS from 'qs';
import { cn } from '@/lib/utils';
import { useSet } from 'react-use';
import { Input } from '@/components/ui';
import { RangeSlider } from './range-slider';
import { FC, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useFilterColors } from '../../../hooks/useFilterColors';
import { useFilterBrands } from '../../../hooks/useFilterBrands';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '@/components/shared';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  gender: string;
  stock: string;
  size: string;
  color: string;
  brand: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
  const [inStock, setInStock] = useState<string | undefined>(
    searchParams.get('stock') === 'true' ? 'true' : undefined,
  );

  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get('size') ? searchParams.get('size')?.split(',') : []),
  );
  const [gender, { toggle: toggleGender }] = useSet(
    new Set<string>(searchParams.get('gender') ? searchParams.get('gender')?.split(',') : []),
  );
  const { brands, defaultBrands, onAddBrandValue, selectedBrands } = useFilterBrands(
    searchParams.get('brand')?.split(','),
  );
  const { colors, defaultColors, loading, onAddColorValue, selectedColors } = useFilterColors(
    searchParams.get('color')?.split(','),
  );

  useEffect(() => {
    const filters = {
      ...prices,
      stock: inStock,
      size: Array.from(sizes),
      gender: Array.from(gender),
      brand: Array.from(selectedBrands),
      color: Array.from(selectedColors),
    };

    const queryString = QS.stringify(filters, {
      arrayFormat: 'comma',
    });
    router.push(`?${queryString}`, { scroll: false });
  }, [prices, gender, sizes, brands, colors, selectedBrands, selectedColors, inStock]);

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
        <FilterCheckbox
          text='В наличии'
          value={'stock'}
          checked={inStock === 'true' ? true : false}
          onCheckedChange={() => setInStock(inStock === 'true' ? undefined : 'true')}
        />
      </div>

      <div className=' border-b  py-6 pb-7'>
        <CheckboxFiltersGroup
          name='gender'
          title='Пол'
          className=''
          loading={false}
          selected={gender}
          onClickCheckbox={toggleGender}
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
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <span></span>
          <Input
            placeholder='30000'
            type='number'
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
          value={[prices.priceFrom || 0, prices.priceTo || 30000]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
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
          onClickCheckbox={onAddBrandValue}
          selected={selectedBrands}
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
          onClickCheckbox={onAddColorValue}
          selected={selectedColors}
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
          selected={sizes}
          onClickCheckbox={toggleSizes}
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
