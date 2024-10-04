import * as React from 'react';



// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';

export function CarouselDemo() {
  return (
    <Carousel className='w-full max-w-xs'>
      <CarouselContent>
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
