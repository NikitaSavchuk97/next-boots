'use client';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { useHoverDirty } from 'react-use';

interface Props {
  className?: string;
  images: string[];
  modal?: boolean;
}

export const ProductImages: FC<Props> = ({ images, className, modal = false }) => {
  const ref = useRef(null);
  const hovered = useHoverDirty(ref);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  //const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, current, count]);

  return (
    <div
      className='flex flex-row justify-center max-w-[700px] max-h-[575px] transition-all duration-500 relative hover:scale-[1.03]'
      ref={ref}
    >
      {!modal && (
        <div
          className={`hidden md:flex flex-col min-w-[98px] h-auto mr-4 rounded-lg border transition-all duration-500 ${
            hovered ? ' border-blue-500 shadow-2xl' : ''
          }`}
        >
          {images.map((item, index) => (
            <Image
              key={index}
              src={item}
              width={300}
              height={300}
              alt={'Фото товара'}
              onClick={() => api?.scrollTo(index)}
              className={` flex  min-w-[40px] min-h-[40px] max-w-[80px] max-h-[80px] m-2 cursor-pointer rounded-xl border  transition-all duration-500 ${
                index === current - 1 && hovered ? 'border-blue-500 shadow-2xl' : ''
              }`}
            />
          ))}
        </div>
      )}

      <div
        className={`flex  justify-center rounded-lg overflow-hidden bg-white border  transition-all duration-500 ${
          hovered ? ' border-blue-500 shadow-2xl' : ''
        }`}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className='w-full max-w-xl min-w-[250px] min-h-[250px] flex items-center'
        >
          <CarouselContent>
            {images.map((image, index) => {
              return (
                <CarouselItem key={index}>
                  <img className='m-auto w-full h-auto object-cover' src={image} alt='' />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            type='button'
            className={`bg-white rounded-md opacity-0 h-12 w-12 hover:border-blue-500 absolute top-[90%]
						active:top-[86%]
						left-3 duration-500 transition-opacity ${hovered ? 'opacity-100' : ''}`}
          />
          <CarouselNext
            type='button'
            className={`bg-white rounded-md opacity-0 h-12 w-12 hover:border-blue-500 absolute top-[90%]
						active:top-[86%]
						right-3 duration-500 transition-opacity  ${hovered ? 'opacity-100' : ''}`}
          />
        </Carousel>
        <div
          className={`flex justify-center opacity-0 mt-4 absolute bottom-2 duration-500 transition-opacity ${
            hovered ? 'opacity-100' : ''
          }`}
        >
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-4 h-4 mx-2 cursor-pointer rounded-full ${
                index === current - 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
