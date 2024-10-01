'use client';

import { FC, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { ProductCard } from './product-card';
import { Title } from './title';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  categotyId: number;
  className?: string;
  listClassName?: string;
}
export const ProductsGroupList: FC<Props> = ({
  title,
  items,
  categotyId,
  className,
  listClassName,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    // root: null,
    // rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categotyId);
    }
  }, [title, categotyId, intersection?.isIntersecting]);

  return (
    <div className={cn('w-full', className)} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-6' />

      <div
        className={cn(
          'grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-5 ',
          listClassName,
        )}
      >
        {items.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          );
        })}
      </div>
    </div>
  );
};
