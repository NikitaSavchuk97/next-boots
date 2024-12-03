import { DialogTitle } from '@/shared/components/ui/dialog';
import { FC } from 'react';

interface Props {
  onClose?: VoidFunction;
}

export const RegisterForm: FC<Props> = ({ onClose }) => {
  return (
    <div>
      <DialogTitle>Регистрация</DialogTitle>
    </div>
  );
};
