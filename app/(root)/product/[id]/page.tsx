import { notFound } from 'next/navigation';
import { bootTypes } from '@/prisma/constants';
import { prisma } from '../../../../prisma/prisma-client';
import { ProductImages } from '../../../../shared/components/shared';
import { Container, Title } from '../../../../shared/components/shared';
import ChooseProductForm from '@/shared/components/shared/choose-product-form';

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      items: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
			},
			
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col lg:flex-row justify-center xl:justify-start my-20 pr-5 pl-5'>
      <ProductImages images={product.images} className='' />
      <div className=' mt-5 lg:mt-0 lg:ml-10 xl:ml-20'>
        <Title
          text={`${product.category.name} ${
            bootTypes.find((bootType) => bootType.value === product.male)?.name
          }:`}
          size='sm'
          className='pt-2'
        />
        <Title text={product.name} size='lg' className='pt-2' />
        <Title text={`Цвет: ${product.mainColorRU}`} size='xs' />
        <br />
        <ChooseProductForm product={product.items} />
      </div>
    </Container>
  );
};

export default ProductPage;
