import { FC } from 'react';
import { WhiteBlock } from '../white-block';
import { CartDrawerItem } from '../cart-drawer-item';

interface PropTypes {
  className?: string;
  items: any[];
  removeCartItem: (id: number) => void;
}

export const CheckoutCart: FC<PropTypes> = ({ className, items, removeCartItem }) => {
  return (
    <WhiteBlock title='1. Корзина' className={className}>
      {items.map((item: any) => (
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
