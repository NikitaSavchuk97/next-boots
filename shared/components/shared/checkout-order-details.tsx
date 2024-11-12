import { cn } from '@/shared/lib/utils';
import { FC, ReactNode } from 'react';

interface PropsTypes {
  className?: string;
  title: ReactNode;
  value: string | number;
}

export const CheckoutOrderDetails: FC<PropsTypes> = ({ className, title, value }) => {
  return (
    <div className={cn('flex my-4', className)}>
      <span className='flex flex-1 text-lg text-neutral-500'>
        {title}
        <div className='flex-1 border-b border-dashed border-b-neutral-200 -top-1 mx-2' />
        <span className=' font-bold text-lg'>{value} ₽</span>
      </span>
    </div>
  );
};
