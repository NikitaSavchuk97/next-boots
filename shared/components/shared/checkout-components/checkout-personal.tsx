import { FC } from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput } from '../form-components';

export const CheckoutPersonal: FC = () => {
  return (
    <WhiteBlock title='2. Персональные данные'>
      <div className='grid grid-cols-2 gap-5'>
        <FormInput name='firstName' className='text-base' placeholder='Имя' />
        <FormInput name='lastName' className='text-base' placeholder='Фамилия' />
        <FormInput name='email' className='text-base' placeholder='Е-майл' />
        <FormInput name='phone' className='text-base' placeholder='Телефон' />
      </div>
    </WhiteBlock>
  );
};
