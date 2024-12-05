import type { Metadata } from 'next';
import { Header, Footer } from '../../shared/components/shared';
import { Suspense } from 'react';

//import favicon from '../../../public/favicon.ico';

export const metadata: Metadata = {
  title: 'ЗКК | Главная',
  description: 'Generated by create next app',

  // icons: {
  //   icon: favicon.src,
  // },
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <main className='flex-grow'>
        {children}
        {modal}
      </main>
      <Footer />
    </>
  );
}
