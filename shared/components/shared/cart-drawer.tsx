'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import CartDrawerItem from './cart-drawer-item';
import { useCartStore } from '@/shared/store';

interface Props {
  className?: string;
}
export const CartDrawer: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const [items, totalAmount, fetchCartItems, removeCartItem] = useCartStore((state) => [
    state.items,
    state.totalAmount,
    state.fetchCartItems,
    state.removeCartItem,
  ]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className='flex flex-col justify-between pb-0 bg-gray-200'
        aria-describedby={undefined}
      >
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

            <Link href='/cart'>
              <Button
                //onClick={() => setRedirecting(true)}
                //loading={loading || redirecting}
                type='submit'
                className='w-full h-12 text-base'
              >
                Оформить заказ
                <ArrowRight className='w-5 ml-2' />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
