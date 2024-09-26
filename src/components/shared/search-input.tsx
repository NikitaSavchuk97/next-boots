'use client';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { FC, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

interface Props {
  className?: string;
}

export const SearchInput: FC<Props> = ({ className }) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  return (
    <>
      {focused && <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-30'></div>}

      <div
        ref={ref}
        className={cn('flex rounded-2xl flex-1 justify-between relative h-11', focused && 'z-30')}
      >
        <Search className='absolute top=1/2 translate-y-[55%] left-3 h-5 text-gray-400' />
        <input
          className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
          type='text'
          placeholder='Найти пару...'
          onFocus={() => setFocused(true)}
        />
        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12',
          )}
        >
          <Link
            className='flex w-full px-3 py-2 items-center gap-3 hover:bg-primary/10'
            href='/product/1'
          >
            <img
              className='rounded-sm h-8 w-8'
              src='https://1.downloader.disk.yandex.ru/preview/c5ab3db2cae78007171b3c1d40d6904bb83d9035c5bfd62b061e91a027c67afd/inf/ctg6tDuuEjAUUx51aIBZ642byRMsiR8tTKw-hb6nBbNP7fotnl1Rmna8GPa5xxXGLO9kSJ0HM9rvq5ulWM5rfg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004'
              alt='Air Force 1'
            />
            <span>Air Force 1</span>
          </Link>
        </div>
      </div>
    </>
  );
};
