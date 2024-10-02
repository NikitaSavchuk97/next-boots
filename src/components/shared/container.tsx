import React from 'react';
import { cn } from '@/lib/utils';
import { ClassNamePropsTypes } from '@/lib/types';

export const Container: React.FC<React.PropsWithChildren<ClassNamePropsTypes>> = ({
  className,
  children,
}) => {
  return <div className={cn('mx-auto max-w-[1920px]', className)}>{children}</div>;
};
