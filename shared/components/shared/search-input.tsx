'use client';

import Link from 'next/link';
import { cn } from '../../lib/utils';
import { Search } from 'lucide-react';
import { Product } from '@prisma/client';
import { FC, useRef, useState } from 'react';
import { ClassNamePropsTypes } from '../../../@types/types';
import { Api } from '../../services/api-client';
import { useClickAway, useDebounce } from 'react-use';

export const SearchInput: FC<ClassNamePropsTypes> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useDebounce(
    async () => {
      try {
        if (focused && searchQuery) {
          const responce = await Api.getProducts.getSearchProducts(searchQuery);
          setProducts(responce);
        } else if (!searchQuery) {
          setProducts([]);
        }
      } catch (e) {
        console.error(e);
      }
    },
    200,
    [searchQuery, focused],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  useClickAway(ref, () => {
    setFocused(false);
    setProducts([]);
  });

  return (
    <>
      {focused && <div className='fixed top-0 left-0 right-0 bottom-0  bg-black/70 z-30'></div>}

      <div
        ref={ref}
        className={cn('flex rounded-2xl flex-1 justify-between relative h-11', focused && 'z-30')}
      >
        <Search className='absolute top=1/2 translate-y-[55%] left-3 h-5 text-gray-400' />
        <input
          className='rounded-2xl outline-none w-full bg-gray-200 pl-11'
          type='text'
          placeholder='Найти пару...'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12',
            )}
          >
            {products.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                className='flex w-full px-3 py-2 items-center gap-3 hover:bg-primary/10'
                href={`/product/${product.id}`}
              >
                <img
                  className='rounded-sm h-8 w-8'
                  src={product.previewImageUrl}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
