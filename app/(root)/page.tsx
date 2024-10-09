import { prisma } from '../../prisma/prisma-client';
import { Container, Filters, Title, TopBar } from '../../shared/components/shared';
import { ProductsGroupList } from '../../shared/components/shared/products-group-list';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className='mt-10 pl-3 pr-3'>
        <Title text='Все пары' size='lg' className='font-extrabold' />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Container className='mt-10 pb-14 pr-4 pl-4'>
        <div className=' flex gap-[30px]'>
          <div className='min-w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {categories.map((category) => {
                return (
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categotyId={category.id}
                      items={category.products}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
