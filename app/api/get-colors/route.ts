import { NextResponse } from 'next/server';
import { prisma } from '../../../prisma/prisma-client';

export async function GET() {
  const colors = await prisma.product.findMany({
    select: {
      mainColorEN: true,
      mainColorRU: true,
    },
    distinct: ['mainColorEN', 'mainColorRU'],
  });

  return NextResponse.json(colors);
}
