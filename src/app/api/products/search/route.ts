import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
  });
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 5);
  return NextResponse.json(randomProducts);
}

// export async function GET(req: NextRequest) {
//   const query = req.nextUrl.searchParams.get('query') || '';

//   const products = await prisma.product.findMany({
//     where: {
//       name: {
//         contains: query,
//         mode: 'insensitive',
//       },
//     },
//     take: 5,
//   });

//   return NextResponse.json(products);
// }
