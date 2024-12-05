'use client';

import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { cn } from '../../lib/utils';
import { Container } from './container';
import { CartButton } from './cart-button';

import { SearchInput } from './search-input';
import { AuthModal } from './modal-components';
import { FC, useEffect, useState } from 'react';
import { ProfileButton } from './profile-button';
import { useRouter, useSearchParams } from 'next/navigation';

interface HeaderPropTypes {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
}

export const Header: FC<HeaderPropTypes> = ({ className, hasSearch = true, hasCart = true }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  useEffect(() => {
    let toastMessage = '';
    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
    }
    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!.';
    }

    if (toastMessage) {
      setTimeout(() => {
        toast.success(toastMessage, { duration: 3000 });
        router.replace('/');
      }, 1000);
    }
  });

  return (
    <header className={cn('border-b border-gray-300 pl-3 pr-3', className)}>
      <Container className='flex items-end md:items-center justify-between py-4 border-b-orange-100'>
        <div className='flex flex-col mr-4 md:mr-0 md:flex-row md:w-full '>
          <Link href='/'>
            <Image
              className='rounded-md h-auto min-w-[200px]'
              src='/logo.png'
              alt='logo'
              width={300}
              height={100}
            />
          </Link>

          {hasSearch && (
            <div className='mt-5 md:mx-4 md:my-auto md:w-full'>
              <SearchInput />
            </div>
          )}
        </div>

        <div className='flex md:items-center justify-center  flex-col  sm:flex-row'>
          <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && (
            <div>
              <CartButton />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
