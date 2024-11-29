'use server';

import { cookies } from 'next/headers';
import { OrderStatus } from '@prisma/client';
import { prisma } from '@/prisma/prisma-client';
import { sendEmail } from '@/shared/lib/send-email';
import { CheckoutFormTypes } from '@/shared/lib/checkout-form-schema';
import { EmailOrder } from '@/shared/components';
import { createPaymont } from '@/shared/lib/create-payment';

export async function createOrder(data: CheckoutFormTypes) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('Токен не найден');
    }

    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error('Корзина не найдена');
    }

    if (userCart?.totalAmount === 0) {
      throw new Error('Корзина не найдена');
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        status: OrderStatus.PENDING,
        totalAmount: userCart.totalAmount,
        items: JSON.stringify(userCart.items),
        fullName: data.firstName + ' ' + data.lastName,
      },
    });

    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    const paymentData = await createPaymont({
      orderId: order.id,
      amount: order.totalAmount,
      description: 'Оплата заказа №' + order.id,
    });

    if (!paymentData) {
      throw new Error('Не удалось создать платеж');
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    const paymentUrl = paymentData.confirmation.confirmation_url;

    await sendEmail(
      data.email,
      'ZKK | Опалата заказа №' + order.id,
      EmailOrder({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: paymentUrl,
      }),
    );

    return paymentUrl;
  } catch (err) {
    console.log('Ошибка при создании заказа:', err);
  }
}
