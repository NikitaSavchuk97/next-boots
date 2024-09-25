import { categories } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'Nikita Savchuk',
        email: 'nikita.savchuk@gmail.com',
        password: hashSync('skyrimzbs', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
      {
        fullName: 'Vasya Kostychenko',
        email: 'vasya.kostychenko@gmail.com',
        password: hashSync('skyrimzbs', 10),
        verified: new Date(),
        role: 'USER',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  const AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH = await prisma.product.create({
    data: {
      name: 'Air Force 1 Olive Black Starfish',
      imageUrl: '',
      categoryId: 1,
      brand: 'nike',
      model: 'air force 1',
      mainColor: 'olive',
    },
  });

  const NEW_BALANCE_BB550PWG = await prisma.product.create({
    data: {
      name: 'New Balance BB550PWG',
      imageUrl: '',
      categoryId: 1,
      brand: 'new balance',
      model: 'bb550pwg',
      mainColor: 'white',
    },
  });

  const BRIKENSTOCK_BOSTON_EVA = await prisma.product.create({
    data: {
      name: 'Brikenstock Boston Eva',
      imageUrl: '',
      categoryId: 3,
      brand: 'brikenstock',
      model: 'boston',
      mainColor: 'black',
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        size: 39,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH.id,
        bootType: 1,
        price: randomDecimalNumber(12000, 13000),
        size: 40,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH.id,
        bootType: 1,
        price: randomDecimalNumber(13000, 14000),
        size: 41,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH.id,
        bootType: 1,
        price: randomDecimalNumber(14000, 15000),
        size: 42,
      },
      {
        productId: NEW_BALANCE_BB550PWG.id,
        bootType: 1,
        price: randomDecimalNumber(9000, 10000),
        size: 41,
      },
      {
        productId: NEW_BALANCE_BB550PWG.id,
        bootType: 1,
        price: randomDecimalNumber(10000, 11000),
        size: 42,
      },
      {
        productId: NEW_BALANCE_BB550PWG.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        size: 43,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA.id,
        bootType: 3,
        price: randomDecimalNumber(4000, 4500),
        size: 41,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA.id,
        bootType: 3,
        price: randomDecimalNumber(4500, 5000),
        size: 43,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA.id,
        bootType: 3,
        price: randomDecimalNumber(5000, 5500),
        size: 43,
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async (e) => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
