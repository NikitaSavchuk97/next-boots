import { FC } from 'react';
import { Button } from '../ui';
import { cn } from '@/shared/lib/utils';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { CartDrawer } from './cart-drawer';

interface Props {
  className?: string;
}

const CartButton: FC<Props> = ({ className }) => {
  return (
    <CartDrawer>
      <Button className={cn('group relative h-11 mt-5 sm:mt-0 sm:ml-3', className)}>
        <b>520 Руб</b>
        <span className='h-full w-[1px] bg-white/30 mx-3'></span>
        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
          <ShoppingCart className='h-4 w-4 relative'></ShoppingCart>
          <b>3</b>
        </div>
        <ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'></ArrowRight>
      </Button>
    </CartDrawer>
  );
};

export default CartButton;
