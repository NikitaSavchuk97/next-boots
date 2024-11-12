'use client';

import { FC } from 'react';
import { useCart } from '@/shared/hooks';
import { Input, Textarea } from '@/shared/components/ui';
import { CheckoutSidebar } from '@/shared/components/shared/checkout-sidebar';
import { CartDrawerItem, Container, Title, WhiteBlock } from '@/shared/components/shared';

const CheckOutPage: FC = () => {
  const { totalAmount, items, removeCartItem } = useCart();
  return (
    <Container>
      <Title text='Оформление заказа' size='xl' className='font-extrabold mb-8 ' />

      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='flex flex-col gap-10 flex-1 '>
          <WhiteBlock title='1. Корзина'>
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

          <WhiteBlock title='2. Персональные данные'>
            <div className='grid grid-cols-2 gap-5'>
              <Input name='firstName' className='text-base' placeholder='Имя' />
              <Input name='lastName' className='text-base' placeholder='Фамилия' />
              <Input name='email' className='text-base' placeholder='Е-майл' />
              <Input name='phone' className='text-base' placeholder='Телефон' />
            </div>
          </WhiteBlock>

          <WhiteBlock title='3. Адрес доставки'>
            <div className='flex flex-col gap-5'>
              <Input name='firstName' className='text-base' placeholder='Имя' />
              <Textarea rows={5} placeholder='Комментарий к заказу' />
            </div>
          </WhiteBlock>
        </div>

        <div className='w-full lg:w-[450px]'>
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
};

export default CheckOutPage;
