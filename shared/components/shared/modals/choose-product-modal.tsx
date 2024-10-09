'use client';

import { FC } from 'react';
import { Dialog } from '../../ui';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ProductImages } from '../product-images';
import { DialogContent, DialogTitle } from '../../ui/dialog';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle>{product.name}</DialogTitle>
        <ProductImages images={product.images} modal={true} />
      </DialogContent>
    </Dialog>
  );
};
