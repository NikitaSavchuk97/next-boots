import { Input } from '../../ui';
import { ErrorText } from '../error-text';
import { ClearButton } from '../clear-button';
import { FC, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { RequiredSymbol } from '../required-symbol';

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<PropTypes> = ({ className, name, required, label, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const error = errors?.[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '', { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className='relative'>
        <Input className='h-12 text-md' {...props} {...register(name)} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {error && <ErrorText text={error} className='mt-2' />}
    </div>
  );
};
