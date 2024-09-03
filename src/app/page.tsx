import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пары' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className=' mt-10 pb-14'>
        <div className=' flex gap-[80px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title={'Боты'}
                items={[
                  {
                    id: 1,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categotyId={1}
              />
              <ProductsGroupList
                title={'НеБоты'}
                items={[
                  {
                    id: 1,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categotyId={2}
              />
              <ProductsGroupList
                title={'СуперБоты'}
                items={[
                  {
                    id: 1,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categotyId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
