'use client';

import { FC, useState } from 'react';
import { Input, Skeleton } from '../ui';
import { FilterCheckbox } from '@/components/shared';
import { CheckboxFiltersGroupPropsTypes, FilterChecboxPropsTypes } from '@/lib/types';

export const CheckboxFiltersGroup: FC<CheckboxFiltersGroupPropsTypes> = ({
  search = true,
  title,
  items,
  defaultItems,
  limit = 2,
  searchInputPlaceholder = 'Поиск... ',
  onClickCheckbox,
  loading,
  defaultValue,
  selected,
  className,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const list = showAll
    ? items.filter((item: FilterChecboxPropsTypes) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchValue = (value: string) => setSearchValue(value);

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className='w-[150px] h-6 mb-4 rounded-[8px]' />)}
        <Skeleton className='w-28 h-6 mb-4 rounded-[8px]' />
      </div>
    );
  }

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && search && (
        <div className='mb-5'>
          <Input
            onChange={(e) => onChangeSearchValue(e.target.value)}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        <>
          {list?.map((item: FilterChecboxPropsTypes, index: number) => {
            return (
              <FilterCheckbox
                text={item.text}
                value={item.value}
                key={index}
                endAdornment={item.endAdornment}
                checked={selected?.has(item.value)}
                onCheckedChange={() => onClickCheckbox?.(item.value)}
                name={name}
              />
            );
          })}
        </>
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-5'>
            {showAll ? '- Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
