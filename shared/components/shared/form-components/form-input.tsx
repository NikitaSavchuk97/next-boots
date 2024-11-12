import { FC, InputHTMLAttributes } from 'react';
import { RequiredSymbol } from '../required-symbol';
import { Input } from '../../ui';
import { ErrorText } from '../error-text';
import { ClearButton } from '../clear-button';

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<PropTypes> = ({ className, name, required, label, ...props }) => {
  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className='relative'>
        <Input className='h-12 text-md' {...props} />
        <ClearButton />
      </div>

      <ErrorText text='Поле обязательно для заполнения' className='mt-2' />
    </div>
  );
};
