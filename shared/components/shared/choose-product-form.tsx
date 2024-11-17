'use client';

import { Button } from '../ui';
import { Title } from './title';
import toast from 'react-hot-toast';
import { FC, useState } from 'react';
import { ProductItem } from '@prisma/client';
import { useCartStore } from '@/shared/store';
import { calculateMinPrice } from '@/shared/lib/calculate-min-price';

interface Props {
  product: ProductItem[];
  className?: string;
}

export const ChooseProductForm: FC<Props> = ({ product, className }) => {
  const [size, setSize] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [productId, setProductId] = useState<number | null>(null);

  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

  const onAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addCartItem(productId);
      toast.success(`Пара в корзине`);
    } catch (error) {
      toast.error('Не удалось добавить пару в корзину');
      console.error(error);
    }
  };

  return (
    <form className='flex flex-col min-w-[250px]' onSubmit={onAddProduct}>
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
                setSize(item.size), setPrice(item.price), setProductId(item.id);
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
      <Button
        loading={loading}
        type='submit'
        className='max-w-[300px]'
        disabled={productId ? false : true}
      >
        Добавить в корзину
      </Button>
    </form>
  );
};
