import { FC } from 'react';
import { cn } from '@/lib/utils';
import { FilterCheckbox, Title } from '@/components/shared';

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='В наличии' value='1' />
      </div>
    </div>
  );
};
