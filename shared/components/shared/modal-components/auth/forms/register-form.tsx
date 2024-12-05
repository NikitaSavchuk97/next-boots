import { FC } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@/shared/components/ui';
import { FormInput } from '../../../form-components';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { DialogTitle } from '@/shared/components/ui/dialog';
import { formRegisterSchema, RegisterFormTypes } from './schemas-form';
import { registerUser } from '@/app/actions';

interface Props {
  onClose?: VoidFunction;
}

export const RegisterForm: FC<Props> = ({ onClose }) => {
  const form = useForm<RegisterFormTypes>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormTypes) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success('Вы успешно зарегистрировались, подтвердите свою почту', { icon: '✅' });

      onClose?.();
    } catch (error) {
      console.error('Ошибка регистрации', error);
      toast.error('Не удалось зарегистрироваться', {
        icon: '❌',
      });
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex justify-between items-center'>
            <DialogTitle>Регистрация</DialogTitle>
            {/* <Title text='Вход в аккаунт' size='md' className='font-bold' /> */}
          </div>
          <FormInput name='fullName' label='Имя' required />
          <FormInput name='email' label='Е-Майл' required />
          <FormInput name='password' label='Пароль' type='password' required />
          <FormInput name='confirmPassword' label='Повторите пароль' type='password' required />

          <Button loading={form.formState.isSubmitting} className='h-12 text-base' type='submit'>
            {/* {form.formState.isSubmitting ? 'Вход...' : 'Войти'} */}
            Зарегистрироваться
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
