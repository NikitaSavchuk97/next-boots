import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Title } from './title';
import { Button } from '../ui';

import Link from 'next/link';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}
export const ProductCard: FC<Props> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div
      className={cn(
        'min-w-[230px] rounded-xl bg-secondary transition-all border hover:border-blue-500 hover:scale-105 ',
        className,
      )}
    >
      <Link href={`/product/${id}`} className='flex justify-center rounded-lg w-full'>
        <img className='rounded-xl w-full h-[270px] object-cover' src={imageUrl} alt='Logo' />
      </Link>

      <div className='px-3'>
        <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

        <div className='flex justify-between items-center mt-4'>
          <span className='text-[20px]'>
            от <b>{price} ₽</b>
          </span>

          <Button variant='secondary' className='text-base font-bold'>
            <Plus size={20} className='mr-1' />
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};
