import { prisma } from '@/prisma/prisma-client';

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
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

  if (!userCart) {
    return;
  }

  const totalAmount = userCart.items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.productItem.price,
    0,
  );

  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount,
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
};
