import { FC } from 'react';

interface EmailOrderProps {
  orderId: number;
  items: any[];
}

export const EmailPayed: FC<EmailOrderProps> = ({ orderId, items }) => {
  return (
    <div>
      <h1>Благодарим за покупку!</h1>
      <p>
        Ваш заказ <b>{orderId}</b> оплачен. Список товаров:
      </p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.productItem.product.name} | {item.productItem.price} ₽
          </li>
        ))}
      </ul>
    </div>
  );
};
