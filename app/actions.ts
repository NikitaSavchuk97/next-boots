'use server';

import { hashSync } from 'bcrypt';
import { cookies } from 'next/headers';
import { prisma } from '@/prisma/prisma-client';
import { EmailOrder, EmailVerification } from '@/shared/components';
import { sendEmail } from '@/shared/lib/send-email';
import { OrderStatus, Prisma } from '@prisma/client';
import { createPaymont } from '@/shared/lib/create-payment';
import { getUserSession } from '@/shared/lib/get-user-session';
import { CheckoutFormTypes } from '@/shared/lib/checkout-form-schema';

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

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('Пользователь не найден');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
      },
    });
  } catch (error) {
    console.error();
  }
}

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error('Почта не подтверждена');
      }
      throw new Error('Пользователь уже существует');
    }

    const createUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createUser.id,
      },
    });

    await sendEmail(
      createUser.email,
      'ZKK | Подтверждение регистрации',
      EmailVerification({
        code: code,
      }),
    );
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
  }
}
