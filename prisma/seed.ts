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

  const AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN = await prisma.product.create({
    data: {
      name: 'Air Force 1 Olive Black Starfish',
      previewImageUrl:
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FAIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN%2Fnike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-1.webp',
      images: [
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FAIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN%2Fnike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-1.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FAIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN%2Fnike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-2.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FAIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN%2Fnike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-3.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FAIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN%2Fnike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-4.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FAIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN%2Fnike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-6.webp',
      ],
      categoryId: 1,
      male: 'MALE',
      brand: 'nike',
      model: 'air force 1',
      mainColor: 'olive',
    },
  });

  const NEW_BALANCE_BB550PWG_WHITE_UNISEX = await prisma.product.create({
    data: {
      name: 'New Balance BB550PWG',
      previewImageUrl:
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/NEW_BALANCE_BB550PWG_WHITE_UNISEX?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FNEW_BALANCE_BB550PWG_WHITE_UNISEX%2Fnew_balance-BB550PWG-WHITE_100-1.webp',
      images: [
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/NEW_BALANCE_BB550PWG_WHITE_UNISEX?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FNEW_BALANCE_BB550PWG_WHITE_UNISEX%2Fnew_balance-BB550PWG-WHITE_100-1.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/NEW_BALANCE_BB550PWG_WHITE_UNISEX?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FNEW_BALANCE_BB550PWG_WHITE_UNISEX%2Fnew_balance-BB550PWG-WHITE_100-2.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/NEW_BALANCE_BB550PWG_WHITE_UNISEX?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FNEW_BALANCE_BB550PWG_WHITE_UNISEX%2Fnew_balance-BB550PWG-WHITE_100-3.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/NEW_BALANCE_BB550PWG_WHITE_UNISEX?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FNEW_BALANCE_BB550PWG_WHITE_UNISEX%2Fnew_balance-BB550PWG-WHITE_100-4.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/NEW_BALANCE_BB550PWG_WHITE_UNISEX?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FNEW_BALANCE_BB550PWG_WHITE_UNISEX%2Fnew_balance-BB550PWG-WHITE_100-5.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/NEW_BALANCE_BB550PWG_WHITE_UNISEX?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FNEW_BALANCE_BB550PWG_WHITE_UNISEX%2Fnew_balance-BB550PWG-WHITE_100-6.webp',
      ],
      categoryId: 1,
      male: 'UNISEX',
      brand: 'new balance',
      model: 'bb550pwg',
      mainColor: 'white',
    },
  });

  const BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN = await prisma.product.create({
    data: {
      name: 'Brikenstock Boston Eva',
      previewImageUrl:
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FBRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN%2FBirkenstock-Boston_EVA_Black_womens-black_black-1.webp',
      images: [
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FBRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN%2FBirkenstock-Boston_EVA_Black_womens-black_black-1.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FBRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN%2FBirkenstock-Boston_EVA_Black_womens-black_black-2.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FBRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN%2FBirkenstock-Boston_EVA_Black_womens-black_black-3.webp',
      ],
      categoryId: 3,
      male: 'FEMALE',
      brand: 'brikenstock',
      model: 'boston',
      mainColor: 'black',
    },
  });

  const THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN = await prisma.product.create({
    data: {
      name: 'The North Face Explore Camp Sandal',
      previewImageUrl:
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FTHE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN%2FThe-North-Face-Explore-Camp-Sandal-1.webp',
      images: [
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FTHE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN%2FThe-North-Face-Explore-Camp-Sandal-1.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FTHE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN%2FThe-North-Face-Explore-Camp-Sandal-2.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FTHE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN%2FThe-North-Face-Explore-Camp-Sandal-3.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FTHE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN%2FThe-North-Face-Explore-Camp-Sandal-4.webp',
        'https://disk.yandex.ru/client/disk/%D0%97%D0%9A%D0%9A/THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%97%D0%9A%D0%9A%2FTHE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN%2FThe-North-Face-Explore-Camp-Sandal-5.webp',
      ],
      categoryId: 3,
      male: 'MALE',
      brand: 'the north face',
      model: 'camp sandal',
      mainColor: 'black',
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantity: 5,
        size: 39,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(12000, 13000),
        quantity: 3,
        size: 40,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(13000, 14000),
        quantity: 7,
        size: 41,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(14000, 15000),
        quantity: 2,
        size: 42,
      },
      {
        productId: NEW_BALANCE_BB550PWG_WHITE_UNISEX.id,
        bootType: 1,
        price: randomDecimalNumber(9000, 10000),
        quantity: 5,
        size: 41,
      },
      {
        productId: NEW_BALANCE_BB550PWG_WHITE_UNISEX.id,
        bootType: 1,
        price: randomDecimalNumber(10000, 11000),
        quantity: 4,
        size: 42,
      },
      {
        productId: NEW_BALANCE_BB550PWG_WHITE_UNISEX.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantity: 3,
        size: 43,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN.id,
        bootType: 3,
        price: randomDecimalNumber(4000, 4500),
        quantity: 2,
        size: 36,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN.id,
        bootType: 3,
        price: randomDecimalNumber(4500, 5000),
        quantity: 3,
        size: 37,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN.id,
        bootType: 3,
        price: randomDecimalNumber(5000, 5500),
        quantity: 1,
        size: 38,
      },
      {
        productId: THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN.id,
        bootType: 3,
        price: randomDecimalNumber(4000, 4500),
        quantity: 2,
        size: 41,
      },
      {
        productId: THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN.id,
        bootType: 3,
        price: randomDecimalNumber(4500, 5000),
        quantity: 3,
        size: 42,
      },
      {
        productId: THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN.id,
        bootType: 3,
        price: randomDecimalNumber(5000, 5500),
        quantity: 1,
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
