import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Categories, Container, SortPopup, Title } from '@/components/shared';

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<div className=' flex flex-col gap-4'>
				
			</div>
    </div>
  );
};
