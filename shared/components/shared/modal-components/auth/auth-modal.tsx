'use client';

import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';
import { LoginForm, RegisterForm } from './forms';
import { Button, Dialog } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ open, onClose }) => {
  const [type, setType] = useState<'login' | 'register'>('login');

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    onClose();
    setType('login');
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className='w-[450px] bg-white p-5' aria-describedby={undefined}>
        {type === 'login' ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}
        <hr />
        <div className='flex gap-2'>
          <Button
            type='button'
            variant='secondary'
            className='gap-2 h-12 p-2 flex-1'
            onClick={() => signIn('yandex', { callbackUrl: '/', redirect: true })}
          >
            <img className='w-6 h-6' src='/yandex-login.svg' alt='' /> Яндекс
          </Button>
        </div>
        <Button variant='outline' onClick={onSwitchType} type='button' className='h-12'>
          {type === 'login' ? 'Регистрация' : 'Войти'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
