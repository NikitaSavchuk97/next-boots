import { notFound } from 'next/navigation';
import { prisma } from '../../../../../prisma/prisma-client';
import { ChooseProductModal } from '../../../../../shared/components/shared';

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
