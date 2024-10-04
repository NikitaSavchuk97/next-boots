import { notFound } from 'next/navigation';
import { Container } from '@/components/shared';
import { ProductImages } from '@/components/shared';
import { prisma } from '../../../../prisma/prisma-client';

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col my-10'>
      <ProductImages src={product.images} className='' />
    </Container>
  );
};

export default ProductPage;
