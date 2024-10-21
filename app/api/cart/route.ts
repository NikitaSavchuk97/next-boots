import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { findOrCreateCart } from '@/shared/lib/find-or-create-cart';
import { updateCartTotalAmount } from '@/shared/lib/update-cart-total-amount';

export async function GET(req: NextRequest) {
  try {
		const token = req.cookies.get('cartToken')?.value;
		
    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }],
      },
      include: {
        items: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.log('[CART_GET] server error', error);
    return NextResponse.json({ message: 'cart get server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;
    const id = await req.json();

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: id,
      },
    });

    if (findCartItem?.productItemId === id) {
      console.log('[CART_POST] product already in cart');
      return NextResponse.json({ message: 'product already in cart' }, { status: 500 });
    }

    await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        productItemId: id,
        quantityInCart: 1,
      },
    });

    const updateUserCart = await updateCartTotalAmount(token);
    const responce = NextResponse.json(updateUserCart);
    responce.cookies.set('cartToken', token);
    return responce;
  } catch (error) {
    console.log('[CART_POST] server error', error);
    return NextResponse.json({ message: 'cart post server error' }, { status: 500 });
  }
}
