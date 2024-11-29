import { FC } from 'react';

interface EmailOrderProps {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const EmailOrder: FC<EmailOrderProps> = ({ orderId, totalAmount, paymentUrl }) => {
  return (
    <div>
      <h1>Заказ #{orderId}</h1>
      <p>
        Оплатите заказ на сумму <b>{totalAmount}</b>₽. Перейдите по этой{' '}
        <a href={paymentUrl}>ссылке</a> для оплаты.
      </p>
    </div>
  );
};
