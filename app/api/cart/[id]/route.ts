import { prisma } from '@/prisma/prisma-client';
import { updateCartTotalAmount } from '@/shared/lib/update-cart-total-amount';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const body = await req.json();
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'cart token not found' });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: 'cart token not found' });
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantityInCart: 999,
      },
    });
  } catch (error) {
    console.log('[CART_PATCH] server error', error);
    return NextResponse.json({ message: 'cart patch server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'cart token not found' });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: 'cart item not found' });
    }

    await prisma.cartItem.delete({
      where: {
        id,
      },
    });

    const updateUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updateUserCart);
  } catch (error) {
    console.log('[CART_DELETE] server error', error);
    return NextResponse.json({ message: 'cart delete server error' }, { status: 500 });
  }
}
