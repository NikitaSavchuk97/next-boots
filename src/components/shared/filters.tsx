import { FC } from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFiltresGroup, FilterCheckbox, Title } from '@/components/shared';
import { Input } from '@/components/ui';
import { RangeSlider } from './range-slider';

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='В наличии' value='1' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={30000} defaultValue={0} />
          <Input type='number' placeholder='30000' min={0} max={30000} defaultValue={30000} />
        </div>

        <RangeSlider min={0} max={30000} step={100} value={[0, 30000]} />
      </div>

      <CheckboxFiltresGroup
        title='Цвет'
        className='mt-5'
        limit={3}
        items={[
          { text: 'Красный', value: '1' },
          { text: 'Синий', value: '2' },
          { text: 'Черный', value: '3' },
          { text: 'Зеленый', value: '4' },
          { text: 'Белый', value: '5' },
        ]}
        defaultItems={[
          { text: 'Белый', value: '1' },
          { text: 'Черный', value: '2' },
        ]}
      />
    </div>
  );
};
