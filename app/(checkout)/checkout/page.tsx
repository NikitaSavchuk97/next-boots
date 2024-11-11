import { CheckoutOrderDetails, Container, Title, WhiteBlock } from '@/shared/components/shared';
import { Input, Textarea } from '@/shared/components/ui';
import { FC } from 'react';
const CheckOutPage: FC = () => {
  return (
    <Container>
      <Title text='Оформление заказа' size='xl' className='font-extrabold mb-8 ' />

      <div className='flex gap-10'>
        <div className='flex flex-col gap-10 flex-1 mb-20'>
          <WhiteBlock title='1. Корзина'>awdawd</WhiteBlock>

          <WhiteBlock title='2. Персональные данные'>
            <div className='grid grid-cols-2 gap-5'>
              <Input name='firstName' className='text-base' placeholder='Имя' />
              <Input name='lastName' className='text-base' placeholder='Фамилия' />
              <Input name='email' className='text-base' placeholder='Е-майл' />
              <Input name='phone' className='text-base' placeholder='Телефон' />
            </div>
          </WhiteBlock>

          <WhiteBlock title='3. Адрес доставки'>
            <div className='flex flex-col gap-5'>
              <Input name='firstName' className='text-base' placeholder='Имя' />
              <Textarea rows={5} className='text-base' placeholder='Комментарий к заказу' />
            </div>
          </WhiteBlock>
        </div>

        <div className='w-[450px]'>
          <WhiteBlock className='p-6 top-4 sticky'>
            <div className='flex flex-col gap-1'>
              <span className='text-xl'>Итого:</span>
              <span className='text-[34px] font-extrabold'>3000 ₽</span>
            </div>

            <CheckoutOrderDetails title='Стоимость товаров:' value={'3000'} />
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
};

export default CheckOutPage;
