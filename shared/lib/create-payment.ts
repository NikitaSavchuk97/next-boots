import axios from 'axios';
import { PaymentData } from '@/@types/yookassa';

interface Props {
  amount: number;
  orderId: number;
  description: string;
}

export async function createPaymont(details: Props) {
  const { data } = await axios.post<PaymentData>(
    `${process.env.YOOKASSA_PAYMENT_URL as string}`,
    {
      amount: {
        value: details.amount,
        currency: 'RUB',
      },
      capture: true,
      description: details.description,
      metadata: {
        orderId: details.orderId,
      },
      confirmation: {
        type: 'redirect',
        return_url: process.env.YOOKASSA_CALLBACK_URL as string,
      },
    },
    {
      auth: {
        username: process.env.YOOKASSA_SHOP_ID as string,
        password: process.env.YOOKASSA_API_KEY as string,
      },
      headers: {
        'Idempotence-Key': Math.random().toString(36).substring(7),
      },
    },
  );

  return data;
}
