import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['cyrillic'],
  variable: '--font-rubik',
  weight: ['400', '500', '600', '700', '800', '900'],
});

import { cn } from '@/shared/lib/utils';
import { Providers } from '@/shared/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <link data-rh='true' rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className={cn('flex flex-col min-h-screen', rubik.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
