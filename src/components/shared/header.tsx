import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

interface Props {
  className?: string;
}
export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b border-gray-100', className)}>
      <Container className='flex items-center justify-between py-8 border-b-orange-100'>
        <div className='flex items-center gap-4'>
          <Image src='/logo.png' alt='logo' width={70} height={60} />
          <div>
            <h1 className='text-5xl uppercase font-black'>Next Boots</h1>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Button className='flex items-center gap-1' variant='outline'>
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className='group relative'>
              <b>520 Руб</b>
              <span className='h-full w-[1px] bg-white/30 mx-3'></span>
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart className='h-4 w-4 relative'></ShoppingCart>
                <b>3</b>
              </div>
              <ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'></ArrowRight>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
