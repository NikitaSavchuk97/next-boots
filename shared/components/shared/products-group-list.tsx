'use client';

import { Title } from './title';
import { cn } from '../../lib/utils';
import { useIntersection } from 'react-use';
import { ProductCard } from './product-card';
import { FC, useEffect, useRef } from 'react';
import { useCategoryStore } from '../../store/category';
import { ProductsGroupListPropsTypes } from '../../../@types/types';

export const ProductsGroupList: FC<ProductsGroupListPropsTypes> = ({
  title,
  items,
  categotyId,
  className,
  listClassName,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categotyId);
    }
  }, [title, categotyId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={cn('w-full ', className)} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-6' />

      <div
        className={cn(
          'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ',
          listClassName,
        )}
      >
        {items.map((product) => {
          return (
            <ProductCard
              images={product.images}
              key={product.id}
              id={product.id}
              name={product.name}
              items={product.items}
              imageUrl={product.previewImageUrl}
              hoverImageUrl={product.hoverPreviewImageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
