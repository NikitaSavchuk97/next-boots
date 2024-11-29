'use client';

import { FC, useState } from 'react';
import { useCart } from '@/shared/hooks';
import { createOrder } from '@/app/actions';
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
import toast from 'react-hot-toast';

const CheckoutPage: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { totalAmount, items, removeCartItem, loading } = useCart();

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

  const onSubmit = async (data: CheckoutFormTypes) => {
    try {
      setSubmitting(true);
      const url: any = await createOrder(data);
      toast.success('Заказ успешно оформлен! Переход на страницу оплаты...', { icon: '✅' });

      if (url) {
        location.href = url;
      }
    } catch (err) {
      setSubmitting(false);
      toast.error('Не удалось создать заказ', { icon: '❌' });
    }
  };

  return (
    <Container>
      <Title text='Оформление заказа' size='xl' className='font-extrabold mb-8 ' />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='flex flex-col gap-10 flex-1 '>
              <CheckoutCart
                items={items}
                loading={loading}
                removeCartItem={removeCartItem}
                className={loading ? 'opacity-60 pointer-events-none' : ''}
              />

              <CheckoutPersonal className={loading ? 'opacity-60 pointer-events-none' : ''} />

              <CheckoutAddress className={loading ? 'opacity-60 pointer-events-none' : ''} />
            </div>

            <div className='w-full lg:w-[450px]'>
              <CheckoutSidebar totalAmount={totalAmount} loading={loading || submitting} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};

export default CheckoutPage;
