import { FC } from 'react';
import { RequiredSymbol } from '../required-symbol';
import { Input } from '../../ui';

interface PropTypes {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<PropTypes> = ({ className, name, required, label, ...props }) => {
  //const {} = useFormContext();

  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className='relative'>
        <Input className='h-12 text-md' {...props} />
			</div>
			

    </div>
  );
};
