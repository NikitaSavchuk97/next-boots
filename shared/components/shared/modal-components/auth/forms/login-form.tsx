import { FC } from 'react';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { Button } from '@/shared/components/ui';
import { FormInput } from '../../../form-components';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { DialogTitle } from '@/shared/components/ui/dialog';
import { formLoginSchema, LoginFormTypes, RegisterFormTypes } from './schemas-form';

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: FC<Props> = ({ onClose }) => {
  const form = useForm<RegisterFormTypes>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormTypes) => {
    try {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (!res?.ok) {
        throw Error();
      }

      toast.success('Вы успешно вошли в аккаунт', { icon: '✅' });

      onClose?.();
    } catch (error) {
      console.error('Ошибка авторизации', error);
      toast.error('Не удалось войти в аккаунт', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center'>
          <DialogTitle>Вход в аккаунт</DialogTitle>
          {/* <Title text='Вход в аккаунт' size='md' className='font-bold' /> */}
        </div>

        <FormInput name='email' label='Е-Майл' required />
        <FormInput name='password' label='Пароль' type='password' required />

        <Button loading={form.formState.isSubmitting} className='h-12 text-base' type='submit'>
          {/* {form.formState.isSubmitting ? 'Вход...' : 'Войти'} */}
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
