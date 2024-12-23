'use client';

import React from 'react';
import { Textarea } from '../../ui';
import { ClearButton } from '../clear-button';
import { useFormContext } from 'react-hook-form';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
}

export const FormTextarea: React.FC<Props> = ({ className, name, label, required, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const error = errors?.[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '');
  };

  return (
    <div className={className}>
      <p className='font-medium mb-2'>
        {label} {required && <span className='text-red-500'>*</span>}
      </p>
      <div className='relative'>
        <Textarea className='h-12 text-md' {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </div>
  );
};
