import { PaymentCallbackData } from '@/@types/yookassa';
import { prisma } from '@/prisma/prisma-client';
import { EmailPayed } from '@/shared/components';
import { sendEmail } from '@/shared/lib/send-email';
import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.orderId),
      },
    });

    if (!order) {
      return NextResponse.json({ error: 'Заказ не найден' });
    }

    const isSucceeded = body.object.status === 'succeeded';

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    const items = JSON.parse(order?.items as string) as any[];


    if (isSucceeded) {
      await sendEmail(
        order.email,
        'ZKK | Ваш заказ оформлен!',
        EmailPayed({ orderId: order.id, items }),
      );
    } else {
      // Оплата не удалась
    }

    return NextResponse.json({ success: 'Заказ оплачен' });
  } catch (err) {
    console.log('Ошибка при возвращении:', err);
    return NextResponse.json({ error: 'Server error' });
  }
}
