'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Title } from './title';
import { cn } from '../../lib/utils';
import { FC, useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { ProductItem } from '@prisma/client';
import { ProductCardPropsTypes } from '../../../@types/types';

export const ProductCard: FC<ProductCardPropsTypes> = ({
  id,
  name,
  items,
  images,
  imageUrl,
  hoverImageUrl,
  className,
}) => {
  const ref = useRef(null);
  const hovered = useHoverDirty(ref);
  const getMinPrice = (productItems: ProductItem[]) => {
    if (productItems.length === 0) return '∞';

    return productItems.reduce((min, product) => {
      return product.price < min ? product.price : min;
    }, productItems[0].price);
  };

  return (
    <Link
      href={`/product/${id}`}
      ref={ref}
      className={cn(
        ' rounded-xl transition-all duration-500 hover:shadow-2xl bg-white border  hover:border-blue-500 hover:scale-[1.03]',
        className,
      )}
    >
      <div className='flex justify-center rounded-lg max-w-[300px] w-full h-auto overflow-hidden relative ml-auto mr-auto'>
        <Image
          width={100}
          height={100}
          className={`rounded-xl w-full h-auto opacity-1 transition-all opacity-1 duration-500 absolute ${
            hovered ? 'opacity-0' : ''
          }`}
          //src={`uploads/${images[0]}`}
          src={imageUrl}
          alt={name}
        />
        <Image
          width={100}
          height={100}
          className={`rounded-xl  w-full h-auto transition-all `}
          //src={`uploads/${images[1]}`}
          src={hoverImageUrl}
          alt={name}
        />
      </div>

      <div className=' flex flex-col pl-3 pr-3 pb-2 justify-center'>
        <span className='text-[20px] text-center'>
          от <b>{getMinPrice(items)} </b>₽
        </span>
        <Title text={name} size='xs' className='mb-1 text-center' />

        <div
          className={`flex items-center justify-center opacity-1 transition-all duration-500 ${
            hovered ? '' : 'opacity-0'
          }`}
        >
          <span className='ml-1 mr-1'>EU:</span>
          <div className={`flex max-w-[300px] flex-wrap text-center `}>
            {items.map((product: ProductItem) => (
              <span className='ml-1 mr-1' key={product.id}>
                {product.size}
              </span>
            ))}
          </div>

          {/* <Button variant='secondary' className='text-base font-bold'>
            <Plus size={20} className='mr-1' />
            Добавить
          </Button> */}
        </div>
      </div>
    </Link>
  );
};
