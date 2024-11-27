import { FC } from 'react';
import { Textarea } from '../../ui';
import { WhiteBlock } from '../white-block';
import { FormInput } from '../form-components';

export const CheckoutAddress: FC = () => {
  return (
    <WhiteBlock title='3. Адрес доставки'>
      <div className='flex flex-col gap-5'>
        <FormInput name='address' className='text-base' placeholder='Имя' />
        <Textarea rows={5} placeholder='Комментарий к заказу' />
      </div>
    </WhiteBlock>
  );
};
