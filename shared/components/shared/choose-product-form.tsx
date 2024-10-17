'use client';

import { ProductItem } from '@prisma/client';
import { FC, useState } from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { calculateMinPrice } from '@/shared/lib/calculate-min-price';

interface Props {
  product: ProductItem[];
  className?: string;
}

const ChooseProductForm: FC<Props> = ({ product, className }) => {
  const [price, setPrice] = useState<number | null>(null);
  const [size, setSize] = useState<number | null>(null);

  const handleClickAdd = (e: any) => {
    e.preventDefault();
    //onClickAddCart?.();
  };

  return (
    <form className='flex flex-col min-w-[250px]' onSubmit={handleClickAdd}>
      {price !== calculateMinPrice(product) && price ? (
        <div className='flex flex-row'>
          <Title size='lg' className='font-medium ml-[34.15px]' text={String(price)} />
          <Title size='sm' className='h-min mt-auto mb-1 ml-2' text='₽' />
        </div>
      ) : (
        <div className='flex flex-row'>
          <Title size='sm' className='h-min mt-auto mb-1 mr-2' text='От' />
          <Title size='lg' className='font-medium' text={String(calculateMinPrice(product))} />
          <Title size='sm' className='h-min mt-auto mb-1 ml-2' text='₽' />
        </div>
      )}

      <br />

      <Title text='Доступные размеры:' size='xs' />
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4  gap-2 mt-5'>
        {product.map((item: ProductItem) => {
          return (
            <Button
              type='button'
              onClick={() => {
                setSize(item.size), setPrice(item.price);
              }}
              className={`flex w-full h-10 justify-center rounded-xl cursor-pointer bg-transparent hover:bg-transparent border hover:border-primary ${
                size === item.size ? 'border-blue-500 border-2' : ''
              }`}
              key={item.id}
            >
              <span className='h-min mt-auto mb-auto text-black'>{item.size}</span>
            </Button>
          );
        })}
      </div>
      <br />
      <br />
      <Button type='submit' className='max-w-[300px]'>
        Добавить в корзину
      </Button>
    </form>
  );
};

export default ChooseProductForm;
