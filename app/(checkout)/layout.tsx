import { Container, Header } from '@/shared/components/shared';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ZKK | Корзина',
  description: '',
};

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <main className='min-h-screen bg-gray-50'>
      <Header className='border-gray-200 mb-8' hasSearch={false} hasCart={false} />
      <Container>{children}</Container>
    </main>
  );
}
