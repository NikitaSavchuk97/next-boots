'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui';
import { Title } from './title';
import { cn } from '@/shared/lib/utils';
import { useCart } from '@/shared/hooks';
import { CartDrawerItem } from './cart-drawer-item';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FC, PropsWithChildren, useState } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { totalAmount, items, removeCartItem } = useCart();
  const [redirecting, setRedirecting] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className={cn(
          'flex flex-col justify-between pb-0 bg-gray-200 rounded-l-3xl',
          !totalAmount && 'justify-center',
        )}
        aria-describedby={undefined}
      >
        {!totalAmount && (
          <div className='flex flex-col items-center justify-center w-72 mx-auto'>
            <Image src='/empty-box.png' alt='Empty cart' width={120} height={120} />
            <SheetTitle className='text-center font-bold text-2xl my-2'>Корзина пуста</SheetTitle>
            <p className='text-center text-neutral-500 mb-5'>
              Добавьте хотя бы одну пару, чтобы совершить заказ
            </p>

            {/* BUTTON IN BUTTON  */}
            <SheetClose>
              <div className='flex flex-row items-center justify-center bg-primary font-bold text-white w-56 h-12 text-base rounded-md hover:opacity-90'>
                <ArrowLeft className=' mr-2' />
                Вернуться назад
              </div>
            </SheetClose>
          </div>
        )}

        {totalAmount > 0 ? (
          <>
            <SheetHeader>
              <SheetTitle>
                В корзине <span className='font-bold-'>{items.length} товара</span>
              </SheetTitle>
            </SheetHeader>

            <div className='-mx-6 mt-5 overflow-auto scrollbar flex-1'>
              {items.map((item: any) => {
                return (
                  <div className='mb-2' key={item.id}>
                    <CartDrawerItem
                      disabled={item.disabled}
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      size={item.size}
                      price={item.price}
                      quantity={item.quantity}
                      imageUrl={item.imageUrl}
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  </div>
                );
              })}
            </div>

            <SheetFooter className='-mx-6 bg-white p-8'>
              <div className='w-full'>
                <div className='flex mb-4'>
                  <span className='flex flex-1 text-lg text-neutral-500'>
                    Итого
                    <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                  </span>

                  <span className='font-bold text-lg'>{totalAmount} ₽</span>
                </div>

                <Link href='/checkout'>
                  <Button
                    onClick={() => setRedirecting(true)}
                    loading={redirecting}
                    type='button'
                    className='w-full h-12 text-base'
                  >
                    Оформить заказ
                    <ArrowRight className='w-5 ml-2' />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        ) : (
          <></>
        )}
      </SheetContent>
    </Sheet>
  );
};
