'use client';

import { FC, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { ProductCard } from './product-card';
import { Title } from './title';

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
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categotyId);
    }
  }, [title, categotyId, intersection?.isIntersecting]);

  return (
    <div className={cn('', className)} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
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
