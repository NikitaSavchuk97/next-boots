import Link from 'next/link';
import { Button } from '../ui';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { FC, useRef } from 'react';
import { Plus } from 'lucide-react';
import { useHoverDirty } from 'react-use';
import { ProductCardPropsTypes } from '@/lib/types';

export const ProductCard: FC<ProductCardPropsTypes> = ({
  id,
  name,
  price,
  imageUrl,
  hoverImageUrl,
  className,
}) => {
  const ref = useRef(null);
  const hovered = useHoverDirty(ref);

  return (
    <div
      ref={ref}
      className={cn(
        'min-w-[230px] rounded-xl bg-secondary transition-all border hover:border-blue-500 hover:scale-105 ',
        className,
      )}
    >
      <Link href={`/product/${id}`} className='flex justify-center rounded-lg w-full'>
        <img
          className='rounded-xl w-full h-[270px] object-cover'
          src={hovered ? hoverImageUrl : imageUrl}
          alt='Logo'
        />
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
