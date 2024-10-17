import { FC } from 'react';
import { cn } from '../../lib/utils';
import { Category } from '@prisma/client';
import { Categories, Container, SortPopup } from '.';

interface CategoriesPropsTypes {
  categories: Category[];
  className?: string;
}

export const TopBar: FC<CategoriesPropsTypes> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        'sticky top-[-1px] bg-white py-5 shadow-xl shadow-black/5 pl-3 pr-3 z-30',
        className,
      )}
    >
      <Container className='flex items-center justify-between'>
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
