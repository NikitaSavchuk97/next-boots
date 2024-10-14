import { FC, PropsWithChildren } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import CartDrawerItem from './cart-drawer-item';

interface Props {
  className?: string;
}
export const CartDrawer: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className='flex flex-col justify-between pb-0 bg-gray-200'
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle>
            В корзине <span className='font-bold-'>3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className='-mx-6 mt-5 overflow-auto scrollbar flex-1'>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl='https://2.downloader.disk.yandex.ru/preview/9b413d6a2608e8e9a35a8980dc87db2d0d0d286d72707fac26e7680b02667c9f/inf/LVHP5rVzHUlk4w70FHf3i4w0yhTcE9L0TEThS-xrUL6ET92LKG16aqVQpQIxqWrpSeeOn0ag3bbnb2SIoRCEjg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004'
              name='AIR_FORCE_1_07-'
              price={9000}
              quantity={2}
            />
          </div>
        </div>

        <SheetFooter className='-mx-6 bg-white p-8'>
          <div className='w-full'>
            <div className='flex mb-4'>
              <span className='flex flex-1 text-lg text-neutral-500'>
                Итого
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              </span>

              <span className='font-bold text-lg'>5000 ₽</span>
            </div>

            <Link href='/cart'>
              <Button
                //onClick={() => setRedirecting(true)}
                //loading={loading || redirecting}
                type='submit'
                className='w-full h-12 text-base'
              >
                Оформить заказ
                <ArrowRight className='w-5 ml-2' />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
