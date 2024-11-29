'use client';

import { Toaster } from 'react-hot-toast';
import NextTopLOader from 'nextjs-toploader';
import { FC, PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toaster />
      <NextTopLOader />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};
