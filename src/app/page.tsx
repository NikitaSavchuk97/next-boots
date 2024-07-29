import { Categories, Container, Title } from '@/components/shared';
import { SortPopup } from '@/components/shared/sort-popup';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пары' size='lg' className='font-extrabold' />
        <Categories />
        <SortPopup />
      </Container>
    </>
  );
}
