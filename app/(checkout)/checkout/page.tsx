'use client';

import { FC } from 'react';
import { useCart } from '@/shared/hooks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutSidebar } from '@/shared/components/shared/checkout-sidebar';
import {
  Title,
  Container,

  CheckoutCart,
  CheckoutPersonal,
  CheckoutAddress,
} from '@/shared/components/shared';

const CheckOutPage: FC = () => {
  const { totalAmount, items, removeCartItem } = useCart();

  const form = useForm({
    //resolver: zodResolver(),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });
  return (
    <Container>
      <Title text='Оформление заказа' size='xl' className='font-extrabold mb-8 ' />

      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='flex flex-col gap-10 flex-1 '>
          <CheckoutCart items={items} removeCartItem={removeCartItem} />

          <CheckoutPersonal />

          <CheckoutAddress />
        </div>

        <div className='w-full lg:w-[450px]'>
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
};

export default CheckOutPage;
