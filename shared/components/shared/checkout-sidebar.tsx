import { FC } from 'react';
import { WhiteBlock } from './white-block';
import { CheckoutOrderDetails } from './checkout-order-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button } from '../ui';

const VAT = 13;
const DELIVERY_PRICE = 250;

interface PropTypes {
  totalAmount: number;
}

export const CheckoutSidebar: FC<PropTypes> = ({ totalAmount }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;
  return (
    <WhiteBlock className='p-6 top-4 sticky'>
      <div className='flex flex-col gap-1'>
        <span className='text-xl'>Итого:</span>
        <span className='text-[34px] font-extrabold'>{totalPrice} ₽</span>
      </div>

      <CheckoutOrderDetails
        title={
          <div className='flex items-center'>
            <Package size={26} className='mr-3 text-gray-300' />
            Стоимость корзины:
          </div>
        }
        value={totalAmount}
      />

      <CheckoutOrderDetails
        title={
          <div className='flex items-center'>
            <Truck size={26} className='mr-3 text-gray-300' />
            Доставка:
          </div>
        }
        value={DELIVERY_PRICE}
      />

      <CheckoutOrderDetails
        title={
          <div className='flex items-center'>
            <Percent size={26} className='mr-3 text-gray-300' />
            Налоги:
          </div>
        }
        value={VAT}
      />

      <Button className='w-full h-14 rounded-xl mt-6 text-base font-bold' type='submit'>
        Перейти к оплате
        <ArrowRight className='ml-2' />
      </Button>
    </WhiteBlock>
  );
};
