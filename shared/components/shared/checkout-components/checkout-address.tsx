import { FC } from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput, FormTextarea } from '../form-components';
import { AddressInput } from '../address-input';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from '../error-text';

interface PropTypes {
  className?: string;
}

export const CheckoutAddress: FC<PropTypes> = ({ className }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title='3. Адрес доставки' className={className}>
      <div className='flex flex-col gap-5'>
        <Controller
          control={control}
          name='address'
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && <ErrorText text={fieldState.error?.message} />}
            </>
          )}
        />
        <FormTextarea name='comment' rows={5} placeholder='Комментарий к заказу' />
      </div>
    </WhiteBlock>
  );
};
