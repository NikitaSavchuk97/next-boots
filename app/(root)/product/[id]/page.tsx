import { notFound } from 'next/navigation';
import { Container, Title } from '../../../../shared/components/shared';
import { ProductImages } from '../../../../shared/components/shared';
import { prisma } from '../../../../prisma/prisma-client';

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col lg:flex-row justify-center lg:justify-between my-10 pr-5 pl-5 '>
      <ProductImages images={product.images} className='' />
      <div className='max-w-[600px] ml-10'>
        <Title text={product.name} className='pt-2' />
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates debitis ratione
          voluptatum assumenda laborum! Ipsa nesciunt maiores iure quibusdam mollitia architecto
          dolor eaque sequi fugiat ipsam voluptates, optio est et.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates debitis ratione
          voluptatum assumenda laborum! Ipsa nesciunt maiores iure quibusdam mollitia architecto
          dolor eaque sequi fugiat ipsam voluptates, optio est et.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates debitis ratione
          voluptatum assumenda laborum! Ipsa nesciunt maiores iure quibusdam mollitia architecto
          dolor eaque sequi fugiat ipsam voluptates, optio est et.
        </p>
      </div>
    </Container>
  );
};

export default ProductPage;
