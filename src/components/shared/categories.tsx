import { FC } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const categoriesList: string[] = ['Кроссовки', 'Кеды', 'Сандали', 'Ботинки'];
const activeIndex: number = 0;

export const Categories: FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categoriesList.map((categoryItem: string, index: number) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === index && 'bg-white shadow-md shadow-gray-300 text-primary',
          )}
          href='/'
          key={index}
        >
          <button>{categoryItem}</button>
        </a>
      ))}
    </div>
  );
};
