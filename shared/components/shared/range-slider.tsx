'use client';

import { cn } from '../../lib/utils';
import { SliderPropsTypes } from '../../../@types/types';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { useState, useEffect, forwardRef, RefObject, Fragment } from 'react';

export const RangeSlider = forwardRef(
  (
    { className, min, max, step, formatLabel, value, onValueChange, ...props }: SliderPropsTypes,
    ref,
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = useState(initialValue);

    useEffect(() => {
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <SliderPrimitive.Root
        ref={ref as RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn('relative flex w-full touch-none select-none  items-center', className)}
        {...props}
      >
        <SliderPrimitive.Track className='relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20'>
          <SliderPrimitive.Range className='absolute h-full bg-primary' />
        </SliderPrimitive.Track>
        {localValues.map((value, index) => (
          <Fragment key={index}>
            <div
              className='absolute text-center'
              style={{
                left: `calc(${((value - min) / (max - min)) * 100}% + 0px)`,
                top: `10px`,
              }}
            ></div>

            <SliderPrimitive.Thumb className='flex flex-col items-center h-4 w-4 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'></SliderPrimitive.Thumb>
          </Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  },
);

RangeSlider.displayName = SliderPrimitive.Root.displayName;
