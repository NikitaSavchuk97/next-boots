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
      name: 'Nike Air Force 1 Olive Black Starfish',
      previewImageUrl:
        'https://1.downloader.disk.yandex.ru/preview/c5ab3db2cae78007171b3c1d40d6904bb83d9035c5bfd62b061e91a027c67afd/inf/ctg6tDuuEjAUUx51aIBZ642byRMsiR8tTKw-hb6nBbNP7fotnl1Rmna8GPa5xxXGLO9kSJ0HM9rvq5ulWM5rfg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      images: [
        'https://1.downloader.disk.yandex.ru/preview/c5ab3db2cae78007171b3c1d40d6904bb83d9035c5bfd62b061e91a027c67afd/inf/ctg6tDuuEjAUUx51aIBZ642byRMsiR8tTKw-hb6nBbNP7fotnl1Rmna8GPa5xxXGLO9kSJ0HM9rvq5ulWM5rfg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/deac3cd8042c613e5cba5877a5df03b84edeb41afa9e187ec26251f83ae4455e/inf/yWuudYyf2wiTZAaRem4nfjlAYguXmn36iorE_mzMB9OcdfReZXBal89ITRU1GIAR6bauLMFLVa0-yyPAQRbotA%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/9b413d6a2608e8e9a35a8980dc87db2d0d0d286d72707fac26e7680b02667c9f/inf/LVHP5rVzHUlk4w70FHf3i4w0yhTcE9L0TEThS-xrUL6ET92LKG16aqVQpQIxqWrpSeeOn0ag3bbnb2SIoRCEjg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/4c87056a76c633e2fdfe23d7e673620cfba9e8e6224ae25633f0370e763491a8/inf/qeWq7nvFTQyoLtJhS2HjAY2byRMsiR8tTKw-hb6nBbNejx3zSf1-m2NOtEqyYYkRz9TOo9H4_r3dNZ7qVQLuCg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-4.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/6ef6fc88ca46798972df7f7596ccbd62e657d62089781e93cf909a167ee1e1b8/inf/_f9MyQRxohS6y0P6dWEKZRH6SIu6LaIFdjN-_-BWNyQekbvFRRq9FQZTRze3X89FRApe88cLklLBmnpHwe_WbQ%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-6.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      ],
      categoryId: 1,
      male: 'MALE',
      brand: 'nike',
      model: 'air force 1',
      mainColorEN: 'olive',
      mainColorRU: 'хаки',
    },
  });

  const NEW_BALANCE_BB550PWG_WHITE_UNISEX = await prisma.product.create({
    data: {
      name: 'New Balance BB550PWG White',
      previewImageUrl:
        'https://1.downloader.disk.yandex.ru/preview/5cda15312e6e3a56fe538e4eb472ae8401e424a6ddf41fd8dd57288dd5680842/inf/X1m7CLinAJJ6Yq5abLu7BF1yvbPblFGSOuSxbMtW7KlLeTzNxAuM3H3lv3RwHAhcSrnD9BEiM9LOaT2tDOto0g%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      images: [
        'https://1.downloader.disk.yandex.ru/preview/5cda15312e6e3a56fe538e4eb472ae8401e424a6ddf41fd8dd57288dd5680842/inf/X1m7CLinAJJ6Yq5abLu7BF1yvbPblFGSOuSxbMtW7KlLeTzNxAuM3H3lv3RwHAhcSrnD9BEiM9LOaT2tDOto0g%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://1.downloader.disk.yandex.ru/preview/b5fd825f7489713f0cadb240874f3976de1d625fd98bd7131db2879b4abb8938/inf/oGnFhC4YOLcAq1EEv-n3FqbWf4ZZq5BGQuANkWiJURuPO0WO1oPHPwgQIumL8MtbZKnS20LZUO8FvasdvNqbZg%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://4.downloader.disk.yandex.ru/preview/b0a5b5434e09d91e85b1ab789f0806f45d3e4e708818ae1afb3430e8068937bb/inf/useMW58HXfM0KUbrYeh142E0aB3PZUdiQFjQVr5gbuIYj8e5Bmh0nejZqbUkbabJ6AaQ315YETshpjzQnkcxKg%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://4.downloader.disk.yandex.ru/preview/3ec25aa22dd481db768033b7dbca91ec36d2b57eae9e6b23f7e481d00155c71f/inf/NPELA6VBpewOs6o1fq5f9D2ogwCU8xvnrbTFpy6cz0BF-WYOXEDEZ9KwvDn36wYKUOr23LZp4Iseo59EG5kjoA%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-4.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://3.downloader.disk.yandex.ru/preview/477e3769c77583c561fa7ed334d4fb791827a9c9336318a437ec2d68561c12cd/inf/VDNWlYPH6u3zycFXW-9MOQZzVAX_-L0XKxOHZPAZmHSmzmm00mNqe-15oOozEeS7awxQ4kF55dgSEN-72bqLEQ%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-5.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://1.downloader.disk.yandex.ru/preview/e8324dd5a235ca2888a7631299fcd60209048f76ea409e6688608465ec62a054/inf/zBTy1FqdLKy6OYE1O05EEabWf4ZZq5BGQuANkWiJURv8yF2XEhsk7FGVOPKayW2hdos8qEvztlcyUynjM4k-Xw%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-6.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      ],
      categoryId: 1,
      male: 'UNISEX',
      brand: 'new balance',
      model: 'bb550pwg',
      mainColorEN: 'white',
      mainColorRU: 'белый',
    },
  });

  const BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN = await prisma.product.create({
    data: {
      name: 'Brikenstock Boston Eva Black',
      previewImageUrl:
        'https://3.downloader.disk.yandex.ru/preview/9596c63110023d23e3a175b8c1d0dc27a238a24cb99aeef9985ecded98c1a685/inf/1JXR3tdAWyit-RxCO0CZ3N2IDqzRi0BWCXFEb2255UByvAtXENyqcXXwOIA6JI4MxjV6A8q7IjY7rYhvIL-Vxg%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      images: [
        'https://3.downloader.disk.yandex.ru/preview/9596c63110023d23e3a175b8c1d0dc27a238a24cb99aeef9985ecded98c1a685/inf/1JXR3tdAWyit-RxCO0CZ3N2IDqzRi0BWCXFEb2255UByvAtXENyqcXXwOIA6JI4MxjV6A8q7IjY7rYhvIL-Vxg%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://3.downloader.disk.yandex.ru/preview/3493f3312a56cd67dd7f60719af90524a8e6c3988f9a85fd108522fea2e10c22/inf/o8rl8gdd6tRUDCtJuDpXit2IDqzRi0BWCXFEb2255UAXWvUQlKy92tMpoxYDPdY0Do5incud1gvQ4Bz5_eTbPw%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/adde5371aac9d74f81a5c1d7c1c397443efed8829dac6979c0b1568b9611c021/inf/7tG8xcto7f2pkzMQmC5faN2IDqzRi0BWCXFEb2255UBzgF7SNQPilVWZ8GIXaSZDmlrjo9kYFVHMxQuVobQj6Q%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      ],
      categoryId: 3,
      male: 'FEMALE',
      brand: 'brikenstock',
      model: 'boston',
      mainColorEN: 'black',
      mainColorRU: 'черный',
    },
  });

  const THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN = await prisma.product.create({
    data: {
      name: 'The North Face Explore Camp Sandal Black',
      previewImageUrl:
        'https://2.downloader.disk.yandex.ru/preview/5ac6bdca300fcd1a5861c470c8378021f1d2307937c3c961e8f1c005aca2e0fa/inf/-qkyweLGo9HqAOeet2W3W2bCstJRCrFLHWtK6m9V67BXEOknvkAD34C7PaunloPw9I9UI3cry-Tb4EZeBrhe2g%3D%3D?uid=795455607&filename=The-North-Face-Explore-Camp-Sandal-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      images: [
        'https://2.downloader.disk.yandex.ru/preview/5ac6bdca300fcd1a5861c470c8378021f1d2307937c3c961e8f1c005aca2e0fa/inf/-qkyweLGo9HqAOeet2W3W2bCstJRCrFLHWtK6m9V67BXEOknvkAD34C7PaunloPw9I9UI3cry-Tb4EZeBrhe2g%3D%3D?uid=795455607&filename=The-North-Face-Explore-Camp-Sandal-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://4.downloader.disk.yandex.ru/preview/2427a7b11b5d1ffbe434d0ae902e5e1f6179e587d79acaa9db29b86b7f28406d/inf/J9SMmxJehwMEFcuZ-4h7x1JVPiuusgE3nLAUjlrPurYtYnY1LElYLwvfj5_fEhcpwOCEYMANm0DKhjn-ev4oJg%3D%3D?uid=795455607&filename=The-North-Face-Explore-Camp-Sandal-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/179e96f61b540b8b478ed95b800a2752f0f2c4891b4ae80a2078a0a8b71abd0a/inf/L85uK-3xl7KyKNgeRd6yvGbCstJRCrFLHWtK6m9V67AKRqVVk1ACLyJKLDQFwZg30AOO4T1TvpKjqMO2rKtweA%3D%3D?uid=795455607&filename=The-North-Face-Explore-Camp-Sandal-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://3.downloader.disk.yandex.ru/preview/333023f3808e5844ae1a2637f22a4b55cc7f36710c0a0853042ea3956db91d55/inf/dV0SbZ8kC0M7DbceX1hSS2bCstJRCrFLHWtK6m9V67DzrvICzEMH2vWL8aloj-W1H0nArivLFxJnI23mk3uBUw%3D%3D?uid=795455607&filename=The-North-Face-Explore-Camp-Sandal-4.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://3.downloader.disk.yandex.ru/preview/8764720267c33f3b86ae2948d565fdad325c6c6f622dd83b5686c1c7c6bd64da/inf/GA2RgXuAwQBzmCWxVekRSzOEl67XsIkpz6K-KV3WY3hFWM3f8BdWtzn0SnEHKybVS2ZfVFPofS9qUM1qEVojiA%3D%3D?uid=795455607&filename=The-North-Face-Explore-Camp-Sandal-5.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      ],
      categoryId: 3,
      male: 'MALE',
      brand: 'the north face',
      model: 'camp sandal',
      mainColorEN: 'black',
      mainColorRU: 'черный',
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantityOfProductItem: 5,
        size: 39,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(12000, 13000),
        quantityOfProductItem: 3,
        size: 40,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(13000, 14000),
        quantityOfProductItem: 7,
        size: 41,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_OLIVE_BLACK_STARFISH_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(14000, 15000),
        quantityOfProductItem: 2,
        size: 42,
      },
      {
        productId: NEW_BALANCE_BB550PWG_WHITE_UNISEX.id,
        bootType: 1,
        price: randomDecimalNumber(9000, 10000),
        quantityOfProductItem: 5,
        size: 41,
      },
      {
        productId: NEW_BALANCE_BB550PWG_WHITE_UNISEX.id,
        bootType: 1,
        price: randomDecimalNumber(10000, 11000),
        quantityOfProductItem: 4,
        size: 42,
      },
      {
        productId: NEW_BALANCE_BB550PWG_WHITE_UNISEX.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantityOfProductItem: 3,
        size: 43,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN.id,
        bootType: 3,
        price: randomDecimalNumber(4000, 4500),
        quantityOfProductItem: 2,
        size: 36,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN.id,
        bootType: 3,
        price: randomDecimalNumber(4500, 5000),
        quantityOfProductItem: 3,
        size: 37,
      },
      {
        productId: BRIKENSTOCK_BOSTON_EVA_BLACK_WOMEN.id,
        bootType: 3,
        price: randomDecimalNumber(5000, 5500),
        quantityOfProductItem: 1,
        size: 38,
      },
      {
        productId: THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN.id,
        bootType: 3,
        price: randomDecimalNumber(4000, 4500),
        quantityOfProductItem: 2,
        size: 41,
      },
      {
        productId: THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN.id,
        bootType: 3,
        price: randomDecimalNumber(4500, 5000),
        quantityOfProductItem: 3,
        size: 42,
      },
      {
        productId: THE_NORTH_FACE_EXPLORE_CAMP_SANDAL_BLACK_MEN.id,
        bootType: 3,
        price: randomDecimalNumber(5000, 5500),
        quantityOfProductItem: 1,
        size: 43,
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '12345678',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '87654321',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantityInCart: 2,
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
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
