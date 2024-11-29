'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui';
import toast from 'react-hot-toast';
import { User } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FC, useEffect } from 'react';
import { Container } from './container';
import { CartButton } from './cart-button';
import { SearchInput } from './search-input';
import { useSearchParams } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import { ProfileButton } from './profile-button';

interface HeaderPropTypes {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
}

export const Header: FC<HeaderPropTypes> = ({ className, hasSearch = true, hasCart = true }) => {
  const { data: session } = useSession();

  console.log(session);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has('paid')) {
      setTimeout(() => {
        toast.success('Заказ успешно оплачен! Информация отправлена на почту.');
      }, 500);
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

        <div className='flex md:items-center  flex-col  sm:flex-row'>
          <ProfileButton />

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
