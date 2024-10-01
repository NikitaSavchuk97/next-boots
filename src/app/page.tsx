import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пары' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14 pr-4 pl-4'>
        <div className=' flex gap-[80px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title={'Кроссовки'}
                categotyId={1}
                items={[
                  {
                    id: 1,
                    name: 'Кроссовки',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 2,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 3,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 4,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 5,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 6,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                ]}
              />
              <ProductsGroupList
                title={'Кеды'}
                categotyId={2}
                items={[
                  {
                    id: 1,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 2,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 3,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 4,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 5,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 6,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                ]}
              />
              <ProductsGroupList
                title={'Сандалии'}
                categotyId={3}
                items={[
                  {
                    id: 1,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 2,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 3,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 4,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 5,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 6,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                ]}
              />
              <ProductsGroupList
                title={'Ботинки'}
                categotyId={4}
                items={[
                  {
                    id: 1,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 2,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 3,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 4,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 5,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                  {
                    id: 6,
                    name: 'Спорт-Боты',
                    imageUrl:
                      'https://static.street-beat.ru/upload/resize_cache/iblock/427/500_500_1/afvoep02iq1yml80xskk04rqcecmqrcc.JPG',
                    price: 5500,
                    items: [{ price: 5500 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
