import { FC } from 'react';
import { Container } from './container';
const Footer: FC = () => {
  return (
    <footer className='pl-3 pr-3'>
      <Container className='w-full max-w-[1440px] ml-auto mr-auto shadow-2xl  border border-gray-300 rounded-t-xl mt-20 h-[300px]'></Container>
    </footer>
  );
};

export default Footer;
