import { Container, Header } from '@/shared/components/shared';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ZKK | Корзина',
  //description: '',
};

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <main className='min-h-screen bg-gray-100'>
      <Header className='border-gray-200 mb-8' hasSearch={false} hasCart={false} />
      <Container className='mt-10 pb-14 pr-4 pl-4'>{children}</Container>
    </main>
  );
}
