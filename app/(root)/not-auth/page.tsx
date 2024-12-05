import { InfoBlock } from '@/shared/components';
import { FC } from 'react';
const page: FC = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <InfoBlock
        title='Доступ запрещен'
        text='Данную страницу могут просматривать только авторизованные пользователи'
        imageUrl='/lock-logo.png'
      />
    </div>
  );
};

export default page;
