import { FC } from 'react';
import { Checkbox } from '../ui/checkbox';
import { FilterChecboxPropsTypes } from '../../../@types/types';

export const FilterCheckbox: FC<FilterChecboxPropsTypes> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className='rounded-[8px] w-6 h-6'
        id={`checkbox-${name}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${name}-${String(value)}`}
        className='leading-none cursor-pointer flex-1'
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
