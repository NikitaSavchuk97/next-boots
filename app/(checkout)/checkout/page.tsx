'use client';

import toast from 'react-hot-toast';
import { useCart } from '@/shared/hooks';
import { createOrder } from '@/app/actions';
import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { Api } from '@/shared/services/api-client';
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
  const { data: session } = useSession();
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

  useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.getMe.getMe();
      const [firstName, lastName] = data.fullName.split(' ');

      form.setValue('firstName', firstName);
      form.setValue('lastName', lastName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

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
