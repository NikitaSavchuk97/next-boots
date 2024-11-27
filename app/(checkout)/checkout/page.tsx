'use client';

import { FC } from 'react';
import { useCart } from '@/shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { checkoutFormSchema, CheckoutFormTypes } from '@/shared/lib/checkout-form-schema';
import {
  Title,
  Container,
  CheckoutCart,
  CheckoutAddress,
  CheckoutSidebar,
  CheckoutPersonal,
} from '@/shared/components';

const CheckoutPage: FC = () => {
  const { totalAmount, items, removeCartItem } = useCart();

  const form = useForm<CheckoutFormTypes>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  const onSubmit = (data: CheckoutFormTypes) => {
    console.log(data);
  };

  return (
    <Container>
      <Title text='Оформление заказа' size='xl' className='font-extrabold mb-8 ' />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
        </form>
      </FormProvider>
    </Container>
  );
};

export default CheckoutPage;