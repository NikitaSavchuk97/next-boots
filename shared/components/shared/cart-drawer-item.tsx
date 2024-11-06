import { FC } from 'react';
import { cn } from '@/shared/lib/utils';
import * as CartItem from './cart-item-details';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps {
  className?: string;
}

const CartDrawerItem: FC<Props> = ({
  className,
  id,
  imageUrl,
  onClickRemove,
  name,
  price,
  disabled,
  quantity,
  size,
  type,
}) => {
  return (
    <div
      className={cn(
        'flex bg-white p-5 gap-6',
        { 'opacity-50 pointer-events-none': disabled },
        className,
      )}
    >
      <CartItem.Image src={imageUrl} />

      <div className='flex-1'>
        <CartItem.Info name={name} type={type} size={size} />
        <hr className='my-1' />
        <div className='flex items-center justify-between'>
          <Trash2Icon
            onClick={onClickRemove}
            className='text-gray-400 cursor-pointer hover:text-gray-600'
            size={16}
          />

          <div className='flex items-center gap-3'>
            <CartItem.Price value={price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawerItem;
