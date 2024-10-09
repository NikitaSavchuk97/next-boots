import { notFound } from 'next/navigation';
import { ChooseProductModal, Container } from '@/components/shared';
import { ProductImages } from '@/components/shared';
import { prisma } from '../../../../../../prisma/prisma-client';

const ProductModalPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
};

export default ProductModalPage;
