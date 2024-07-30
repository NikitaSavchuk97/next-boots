'use client';

import { FC, useState } from 'react';
import { FilterChecboxProps } from './filter-checkbox';
import { FilterCheckbox } from '@/components/shared';
import { Input } from '../ui';

interface Props {
  title: string;
  items: FilterChecboxProps[];
  defaultItems: FilterChecboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltresGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск... ',
  onChange,
  defaultValue,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? items : defaultItems.slice(0, limit);
  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item: FilterChecboxProps, index: number) => {
          return (
            <FilterCheckbox
              text={item.text}
              value={item.value}
              key={index}
              endAdornment={item.endAdornment}
              //checked={false}
              onCheckedChange={(id) => console.log(id)}
            />
          );
        })}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-5'>
            {showAll ? 'Скрыть' : 'Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
