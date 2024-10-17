'use client';

import { FC } from 'react';
import { Button } from '../ui';
import { cn } from '@/shared/lib/utils';
import { ArrowRight, Loader, Loader2, Loader2Icon, ShoppingCart, SplineIcon } from 'lucide-react';
import { CartDrawer } from './cart-drawer';
import { useCartStore } from '@/shared/store';

interface Props {
  className?: string;
}

const CartButton: FC<Props> = ({ className }) => {
  const [totalAmount, items, loading] = useCartStore((state) => [
    state.totalAmount,
    state.items,
    state.loading,
  ]);

  return (
    <CartDrawer>
      {loading ? (
        <Button className={cn('group relative h-11 mt-5 sm:mt-0 sm:ml-3', className)}>
          <Loader className='animate-spin' />
        </Button>
      ) : (
        <Button className={cn('group relative h-11 mt-5 sm:mt-0 sm:ml-3', className)}>
          <b>{totalAmount} ₽</b>
          <span className='h-full w-[1px] bg-white/30 mx-3'></span>
          <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
            <ShoppingCart className='h-4 w-4 relative'></ShoppingCart>
            <b>{items.length}</b>
          </div>
          <ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'></ArrowRight>
        </Button>
      )}
    </CartDrawer>
  );
};

export default CartButton;
