import { NextResponse } from 'next/server';
import { prisma } from '../../../prisma/prisma-client';

export async function GET() {
  const brands = await prisma.product.findMany({
    select: {
      brand: true,
    },
    distinct: ['brand'],
  });

  return NextResponse.json(brands);
}
