'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { ClassNamePropsTypes } from '@/lib/types';

const categoriesList = [
  { id: 1, name: 'Кроссовки' },
  { id: 2, name: 'Кеды' },
  { id: 3, name: 'Сандалии' },
  { id: 4, name: 'Ботинки' },
];

export const Categories: FC<ClassNamePropsTypes> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categoriesList.map(({ id, name }, index: number) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-300 text-primary',
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
