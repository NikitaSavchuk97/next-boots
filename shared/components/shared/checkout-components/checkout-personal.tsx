import { FC } from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput } from '../form-components';

interface PropTypes {
  className?: string;
}

export const CheckoutPersonal: FC<PropTypes> = ({ className }) => {
  return (
    <WhiteBlock title='2. Персональные данные' className={className}>
      <div className='grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-5'>
        <FormInput name='firstName' className='text-base' placeholder='Имя' />
        <FormInput name='lastName' className='text-base' placeholder='Фамилия' />
        <FormInput name='email' className='text-base' placeholder='Е-майл' />
        <FormInput name='phone' className='text-base' placeholder='Телефон' />
      </div>
    </WhiteBlock>
  );
};
