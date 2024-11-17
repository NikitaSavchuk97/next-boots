import { FC } from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput } from '../form-components';
import { Textarea } from '../../ui';

export const CheckoutAddress: FC = () => {
  return (
    <WhiteBlock title='3. Адрес доставки'>
      <div className='flex flex-col gap-5'>
        <FormInput name='firstName' className='text-base' placeholder='Имя' />
        <Textarea rows={5} placeholder='Комментарий к заказу' />
      </div>
    </WhiteBlock>
  );
};
