'use client';

import { FC } from 'react';
import { cn } from '../../lib/utils';
import { Category } from '@prisma/client';
import { useCategoryStore } from '@/shared/store';

interface CategoriesPropsTypes {
  items: Category[];
  className?: string;
}

export const Categories: FC<CategoriesPropsTypes> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-200 p-1 rounded-2xl', className)}>
      {items.map(({ id, name }, index: number) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-xl px-5',
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
