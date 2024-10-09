import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['cyrillic'],
  variable: '--font-rubik',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <link data-rh='true' rel='icon' href='/favicon.ico' />
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
