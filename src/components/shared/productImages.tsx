import { FC } from 'react';

interface Props {
  className?: string;
  src: string[];
}

export const ProductImages: FC<Props> = ({ src, className }) => {
  return (
    <div className='flex justify-center'>
      <img src={src} width={'300px'} alt='' />
    </div>
  );
};
