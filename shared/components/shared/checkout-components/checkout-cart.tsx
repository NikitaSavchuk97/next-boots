import { FC } from 'react';
import { WhiteBlock } from '../white-block';
import { CartDrawerItem } from '../cart-drawer-item';
import { Skeleton } from '../../ui';

interface PropTypes {
  items: any[];
  loading?: boolean;
  className?: string;
  removeCartItem: (id: number) => void;
}

export const CheckoutCart: FC<PropTypes> = ({ className, items, removeCartItem, loading }) => {
  return (
    <WhiteBlock title='1. Корзина' className={className}>
      {loading
        ? [...Array(2)].map((_, index) => <Skeleton key={index} className='h-[89px] m-5' />)
        : items.map((item: any) => (
            <CartDrawerItem
              key={item.id}
              disabled={item.disabled}
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              type={item.type}
              size={item.size}
              onClickRemove={() => removeCartItem(item.id)}
            />
          ))}
    </WhiteBlock>
  );
};
