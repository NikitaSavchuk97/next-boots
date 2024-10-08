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

  const AIR_FORCE_1_MEDIUM_STARFISH_OLIVE_BLACK_MEN = await prisma.product.create({
    data: {
      name: 'Nike Air Force 1 Starfish Olive|Black ',
      previewImageUrl:
        'https://2.downloader.disk.yandex.ru/preview/9b413d6a2608e8e9a35a8980dc87db2d0d0d286d72707fac26e7680b02667c9f/inf/LVHP5rVzHUlk4w70FHf3i4w0yhTcE9L0TEThS-xrUL6ET92LKG16aqVQpQIxqWrpSeeOn0ag3bbnb2SIoRCEjg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      hoverPreviewImageUrl:
        'https://1.downloader.disk.yandex.ru/preview/c5ab3db2cae78007171b3c1d40d6904bb83d9035c5bfd62b061e91a027c67afd/inf/ctg6tDuuEjAUUx51aIBZ642byRMsiR8tTKw-hb6nBbNP7fotnl1Rmna8GPa5xxXGLO9kSJ0HM9rvq5ulWM5rfg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      images: [
        'https://2.downloader.disk.yandex.ru/preview/9b413d6a2608e8e9a35a8980dc87db2d0d0d286d72707fac26e7680b02667c9f/inf/LVHP5rVzHUlk4w70FHf3i4w0yhTcE9L0TEThS-xrUL6ET92LKG16aqVQpQIxqWrpSeeOn0ag3bbnb2SIoRCEjg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/deac3cd8042c613e5cba5877a5df03b84edeb41afa9e187ec26251f83ae4455e/inf/yWuudYyf2wiTZAaRem4nfjlAYguXmn36iorE_mzMB9OcdfReZXBal89ITRU1GIAR6bauLMFLVa0-yyPAQRbotA%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://1.downloader.disk.yandex.ru/preview/c5ab3db2cae78007171b3c1d40d6904bb83d9035c5bfd62b061e91a027c67afd/inf/ctg6tDuuEjAUUx51aIBZ642byRMsiR8tTKw-hb6nBbNP7fotnl1Rmna8GPa5xxXGLO9kSJ0HM9rvq5ulWM5rfg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/4c87056a76c633e2fdfe23d7e673620cfba9e8e6224ae25633f0370e763491a8/inf/qeWq7nvFTQyoLtJhS2HjAY2byRMsiR8tTKw-hb6nBbNejx3zSf1-m2NOtEqyYYkRz9TOo9H4_r3dNZ7qVQLuCg%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-4.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://2.downloader.disk.yandex.ru/preview/6ef6fc88ca46798972df7f7596ccbd62e657d62089781e93cf909a167ee1e1b8/inf/_f9MyQRxohS6y0P6dWEKZRH6SIu6LaIFdjN-_-BWNyQekbvFRRq9FQZTRze3X89FRApe88cLklLBmnpHwe_WbQ%3D%3D?uid=795455607&filename=nike-AIR_FORCE_1_07-MEDIUM_OLIVE_BLACK_STARFISH-6.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      ],
      categoryId: 1,
      male: 'MALE',
      brand: 'nike',
      model: 'air force 1',
      mainColorEN: 'khaki',
      mainColorRU: 'хаки',
    },
  });

  const NEW_BALANCE_BB550PWG_WHITE_UNISEX = await prisma.product.create({
    data: {
      name: 'New Balance BB550PWG White',
      previewImageUrl:
        'https://1.downloader.disk.yandex.ru/preview/5cda15312e6e3a56fe538e4eb472ae8401e424a6ddf41fd8dd57288dd5680842/inf/X1m7CLinAJJ6Yq5abLu7BF1yvbPblFGSOuSxbMtW7KlLeTzNxAuM3H3lv3RwHAhcSrnD9BEiM9LOaT2tDOto0g%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      hoverPreviewImageUrl:
        'https://1.downloader.disk.yandex.ru/preview/b5fd825f7489713f0cadb240874f3976de1d625fd98bd7131db2879b4abb8938/inf/oGnFhC4YOLcAq1EEv-n3FqbWf4ZZq5BGQuANkWiJURuPO0WO1oPHPwgQIumL8MtbZKnS20LZUO8FvasdvNqbZg%3D%3D?uid=795455607&filename=new_balance-BB550PWG-WHITE_100-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
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
        'https://2.downloader.disk.yandex.ru/preview/adde5371aac9d74f81a5c1d7c1c397443efed8829dac6979c0b1568b9611c021/inf/7tG8xcto7f2pkzMQmC5faN2IDqzRi0BWCXFEb2255UBzgF7SNQPilVWZ8GIXaSZDmlrjo9kYFVHMxQuVobQj6Q%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      hoverPreviewImageUrl:
        'https://3.downloader.disk.yandex.ru/preview/9596c63110023d23e3a175b8c1d0dc27a238a24cb99aeef9985ecded98c1a685/inf/1JXR3tdAWyit-RxCO0CZ3N2IDqzRi0BWCXFEb2255UByvAtXENyqcXXwOIA6JI4MxjV6A8q7IjY7rYhvIL-Vxg%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
      images: [
        'https://2.downloader.disk.yandex.ru/preview/adde5371aac9d74f81a5c1d7c1c397443efed8829dac6979c0b1568b9611c021/inf/7tG8xcto7f2pkzMQmC5faN2IDqzRi0BWCXFEb2255UBzgF7SNQPilVWZ8GIXaSZDmlrjo9kYFVHMxQuVobQj6Q%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://3.downloader.disk.yandex.ru/preview/9596c63110023d23e3a175b8c1d0dc27a238a24cb99aeef9985ecded98c1a685/inf/1JXR3tdAWyit-RxCO0CZ3N2IDqzRi0BWCXFEb2255UByvAtXENyqcXXwOIA6JI4MxjV6A8q7IjY7rYhvIL-Vxg%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
        'https://3.downloader.disk.yandex.ru/preview/3493f3312a56cd67dd7f60719af90524a8e6c3988f9a85fd108522fea2e10c22/inf/o8rl8gdd6tRUDCtJuDpXit2IDqzRi0BWCXFEb2255UAXWvUQlKy92tMpoxYDPdY0Do5incud1gvQ4Bz5_eTbPw%3D%3D?uid=795455607&filename=Birkenstock-Boston_EVA_Black_womens-black_black-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
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
      hoverPreviewImageUrl:
        'https://4.downloader.disk.yandex.ru/preview/2427a7b11b5d1ffbe434d0ae902e5e1f6179e587d79acaa9db29b86b7f28406d/inf/J9SMmxJehwMEFcuZ-4h7x1JVPiuusgE3nLAUjlrPurYtYnY1LElYLwvfj5_fEhcpwOCEYMANm0DKhjn-ev4oJg%3D%3D?uid=795455607&filename=The-North-Face-Explore-Camp-Sandal-2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=1912x1004',
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

  const ADIDAS_FORUM_LOW_GRAY_BLUE_MEN = await prisma.product.create({
    data: {
      name: 'Adidas Forum Low Gray|Blue',
      previewImageUrl:
        'https://2.downloader.disk.yandex.ru/preview/e12e831183bf63bff5f3273b826a9826d0c57b8d626a5006d650e58847f6e1e8/inf/JhLJoCDrLonofKOuktfhhJOVnui9bJhwvkbJQjs5_bgJrkQqEIn0ViimPL36WdikUfV9e4t_Ivujf-HX9fVH4Q%3D%3D?uid=795455607&filename=ADIDAS_FORUM_LOW_GRAY_BLUE_MEN_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      hoverPreviewImageUrl:
        'https://4.downloader.disk.yandex.ru/preview/368cb26ba5c395000269ea3d8844ee0ed7655407440d488de9f8dc80a0e08ebd/inf/5iEz6vEkAWeZSehO5jqcaA2m1BjDwnbwr3FUTMrkQZPiT_TKM6NCi0TbrtyArMUFA0JbPQ-ldePSSJacdDBikw%3D%3D?uid=795455607&filename=ADIDAS_FORUM_LOW_GRAY_BLUE_MEN_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      images: [
        'https://2.downloader.disk.yandex.ru/preview/e12e831183bf63bff5f3273b826a9826d0c57b8d626a5006d650e58847f6e1e8/inf/JhLJoCDrLonofKOuktfhhJOVnui9bJhwvkbJQjs5_bgJrkQqEIn0ViimPL36WdikUfV9e4t_Ivujf-HX9fVH4Q%3D%3D?uid=795455607&filename=ADIDAS_FORUM_LOW_GRAY_BLUE_MEN_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://4.downloader.disk.yandex.ru/preview/368cb26ba5c395000269ea3d8844ee0ed7655407440d488de9f8dc80a0e08ebd/inf/5iEz6vEkAWeZSehO5jqcaA2m1BjDwnbwr3FUTMrkQZPiT_TKM6NCi0TbrtyArMUFA0JbPQ-ldePSSJacdDBikw%3D%3D?uid=795455607&filename=ADIDAS_FORUM_LOW_GRAY_BLUE_MEN_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://2.downloader.disk.yandex.ru/preview/9f7ad2ae252226ff04fa32334e542850325e94a9309744c542f6d97ca2ab3453/inf/4QFedU6BxQlLHSngbSHym65vx5R4EK1ZaH1dVKvNod9cN9lY8P_Tu-d45l1_dwdP5lVV1S8hUMLLBKw9TEiqsQ%3D%3D?uid=795455607&filename=ADIDAS_FORUM_LOW_GRAY_BLUE_MEN_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://3.downloader.disk.yandex.ru/preview/68f92f18fc0d48c8de18b281356539297c2328fee02543535452f103c7a98158/inf/ddohlBvzfdFnBc_OqzaO57l9hahPdFC8isQoqjG0cs2gTZP20tqyygpIdLusfCCnVeyyrroqZr704Y8T2T0vhw%3D%3D?uid=795455607&filename=ADIDAS_FORUM_LOW_GRAY_BLUE_MEN_4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://1.downloader.disk.yandex.ru/preview/4ee2297ef8e3431b53dd7525a4249bf420cc7a8f7ccce8b3bf2734c8609cf097/inf/_4GkYmWWKdlqDo96coUseAxsELMlgn_M-aBQbpzvRivccDGe_KrcMcqTxR8hDG0vKcI8wBNUQNOuZydhMtAygw%3D%3D?uid=795455607&filename=ADIDAS_FORUM_LOW_GRAY_BLUE_MEN_5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      ],
      categoryId: 1,
      male: 'MALE',
      brand: 'adidas',
      model: 'forum',
      mainColorEN: 'gray',
      mainColorRU: 'серый',
    },
  });

  const DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX = await prisma.product.create({
    data: {
      name: 'Dr Martens 1460 Smooth Leather Black',
      previewImageUrl:
        'https://2.downloader.disk.yandex.ru/preview/6c0af223fa0e256fb81e5d1f677856eaab4ec38f8a9d7553eb7bdd4fa84782a3/inf/KUuYUrj0nl8U88RYp32eXkMsOTI-QVvpDzFEOPyP02RaihKDGz-JTXv9sUzW7A4fmoThUeWJRhjojKXFqGHiHQ%3D%3D?uid=795455607&filename=DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      hoverPreviewImageUrl:
        'https://1.downloader.disk.yandex.ru/preview/21473890fb8e0354ab514b84afebb94b96af228eb4e998e568b73550ddfd272c/inf/GlqG2dT-a1HeVXkonLi3aRP2pcs19Vgm_KIuXkjTIPP6j0ZSJ3M1NmJFlduM9tOhMWg2rlDf2yqRDb-ZUm4wzw%3D%3D?uid=795455607&filename=DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      images: [
        'https://2.downloader.disk.yandex.ru/preview/6c0af223fa0e256fb81e5d1f677856eaab4ec38f8a9d7553eb7bdd4fa84782a3/inf/KUuYUrj0nl8U88RYp32eXkMsOTI-QVvpDzFEOPyP02RaihKDGz-JTXv9sUzW7A4fmoThUeWJRhjojKXFqGHiHQ%3D%3D?uid=795455607&filename=DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://1.downloader.disk.yandex.ru/preview/21473890fb8e0354ab514b84afebb94b96af228eb4e998e568b73550ddfd272c/inf/GlqG2dT-a1HeVXkonLi3aRP2pcs19Vgm_KIuXkjTIPP6j0ZSJ3M1NmJFlduM9tOhMWg2rlDf2yqRDb-ZUm4wzw%3D%3D?uid=795455607&filename=DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://2.downloader.disk.yandex.ru/preview/4ab4b3f1b27f8da08f7d6daa362249f0ad3a4bb7f58aa6ad953a0c2aa0ae081f/inf/UJSuDrVb1cRweqPW_asKQkMsOTI-QVvpDzFEOPyP02RDp0jdKKYczl--qp4RtJgxOeJx9--IKDM4Gr0xiXNCVw%3D%3D?uid=795455607&filename=DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://4.downloader.disk.yandex.ru/preview/7fa9a28133b7920af780ec02dda419fba2f612b74f826bfb73026268965793fb/inf/mGx5SkEdZq_FbKYTA87ztUMsOTI-QVvpDzFEOPyP02T55F5B7shEMjrIVgPl61EvVb13sUD6eIBc-4qpunpHuA%3D%3D?uid=795455607&filename=DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX_4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://3.downloader.disk.yandex.ru/preview/474c00cce99ab0c7b9a18ece04ca56c1d348abdbc13fdccd119393f05df8e67b/inf/_W3m1H8Uwmnrj9k3s7YM4_yKUhlKdRax4ZR8VN7fuS7YKlBWsryFOnbY38EoaXjjLWDsDbButccy69YnePdRNQ%3D%3D?uid=795455607&filename=DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX_5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      ],
      categoryId: 4,
      male: 'UNISEX',
      brand: 'dr martens',
      model: '1460',
      mainColorEN: 'black',
      mainColorRU: 'черный',
    },
  });

  const VANS_KNU_SKOOL_BLUE_UNISEX = await prisma.product.create({
    data: {
      name: 'Vans Knu Skool Blue',
      previewImageUrl:
        'https://2.downloader.disk.yandex.ru/preview/9e41d82cc03323152fd949d84e230f7e8a0c926abed1e5991d77ff0bbd61ac64/inf/yWH-7Yby3OeUOWvj4i6PFm8F86JklYNf9fNZ5uHoj7hDMTRSCOTft4eqlEy-mJ3LEa6FH0hHuCtDySp00LELIA%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLUE_UNISEX_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      hoverPreviewImageUrl:
        'https://1.downloader.disk.yandex.ru/preview/803ce5f6239d0ef9dc55c61042f82b640f0f745580c4c41f8a5eee492cf8b684/inf/StxpE_qJqBBzAjlLh7JimJQhcP6oDwmNf5eHV6y6rx_RgWnHFaIriWaAMrNIDcTT1pC23UaBKenxbAOicX4Lxg%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLUE_UNISEX_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      images: [
        'https://2.downloader.disk.yandex.ru/preview/9e41d82cc03323152fd949d84e230f7e8a0c926abed1e5991d77ff0bbd61ac64/inf/yWH-7Yby3OeUOWvj4i6PFm8F86JklYNf9fNZ5uHoj7hDMTRSCOTft4eqlEy-mJ3LEa6FH0hHuCtDySp00LELIA%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLUE_UNISEX_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://1.downloader.disk.yandex.ru/preview/803ce5f6239d0ef9dc55c61042f82b640f0f745580c4c41f8a5eee492cf8b684/inf/StxpE_qJqBBzAjlLh7JimJQhcP6oDwmNf5eHV6y6rx_RgWnHFaIriWaAMrNIDcTT1pC23UaBKenxbAOicX4Lxg%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLUE_UNISEX_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://4.downloader.disk.yandex.ru/preview/e48413f5387ab8978a606da20ab93b33847879d602efebfbe2a07cd0b988fbce/inf/Q-kGqatlpaly_OaPuPIfjyWvKUWZBfz6ZumEjwdnoFCy76vTxaIaikxRL5i-WaWwyVMyfkbV7qQZy5ICZtWR8A%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLUE_UNISEX_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://3.downloader.disk.yandex.ru/preview/905b488ee035764e6d797912b2741c0ca9bd1dc64c32a8f24993303c66ba8450/inf/2wwTNYRdAU2ftXWpPbWWHIQBbNbZILMANZf2TwcxVNYMM_I-WweUQHywChd6r1xgtAsvHJ37p88u0YLb-_3aCw%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLUE_UNISEX_4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://3.downloader.disk.yandex.ru/preview/905b488ee035764e6d797912b2741c0ca9bd1dc64c32a8f24993303c66ba8450/inf/2wwTNYRdAU2ftXWpPbWWHIQBbNbZILMANZf2TwcxVNYMM_I-WweUQHywChd6r1xgtAsvHJ37p88u0YLb-_3aCw%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLUE_UNISEX_4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      ],
      categoryId: 2,
      male: 'UNISEX',
      brand: 'vans',
      model: 'knu skool',
      mainColorEN: 'blue',
      mainColorRU: 'синий',
    },
  });

  const VANS_KNU_SKOOL_BLACK_CHILD = await prisma.product.create({
    data: {
      name: 'Vans Knu Skool Black',
      previewImageUrl:
        'https://4.downloader.disk.yandex.ru/preview/f9be7455e9c598bc42802e3319b86361ee02b0fe471454e0e4e4a0ea0493ee0e/inf/ehh3fcMWFl_7HJV-X1cIJWQ_EgiKPWf0XaLkvPKPHqmcC7VpF0a4PmwjHWl2UPU-dVlvJytqmrqXcS9yT6ChUA%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLACK_CHILD_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      hoverPreviewImageUrl:
        'https://2.downloader.disk.yandex.ru/preview/76fceb160851d97a3c3858be66d4305028c8074e11afb60ac962ca4c1b4e8be3/inf/ooNPd7PmKa9T7UbQTyRDdQRjLjQL9_Kr1VRzVw9xp6ekaP6ga87FDsRLRQj-Y2M5w8964WaM_JMdS1Dv1Cz95w%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLACK_CHILD_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      images: [
        'https://4.downloader.disk.yandex.ru/preview/f9be7455e9c598bc42802e3319b86361ee02b0fe471454e0e4e4a0ea0493ee0e/inf/ehh3fcMWFl_7HJV-X1cIJWQ_EgiKPWf0XaLkvPKPHqmcC7VpF0a4PmwjHWl2UPU-dVlvJytqmrqXcS9yT6ChUA%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLACK_CHILD_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://2.downloader.disk.yandex.ru/preview/76fceb160851d97a3c3858be66d4305028c8074e11afb60ac962ca4c1b4e8be3/inf/ooNPd7PmKa9T7UbQTyRDdQRjLjQL9_Kr1VRzVw9xp6ekaP6ga87FDsRLRQj-Y2M5w8964WaM_JMdS1Dv1Cz95w%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLACK_CHILD_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://2.downloader.disk.yandex.ru/preview/fc2363b614bbd5fc80cbcf2fce4ed4d48b97dd68262cf32411bd6651112baeaf/inf/mePNORdHqjzDSIUmoX5BOmQ_EgiKPWf0XaLkvPKPHqlbqtnmTisZFKVowDppDST4HUiUACfox13mfrTiXSTxmA%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLACK_CHILD_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://3.downloader.disk.yandex.ru/preview/75987d90f34990d1f5de32dd9542b2791abdd1c724bd7ad9e9a35ef9d69df681/inf/DLAQsRDB9JzOfW8p4_-fuLiXJUdKREuf2UAs4xH-yxmbQEEV-38fGw5af0iliXL61gvhpdpzGoE2QO5N6XqOUw%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLACK_CHILD_4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
        'https://3.downloader.disk.yandex.ru/preview/1f01f584ccb03246b92b0b69b8bc035376ade650cafe3950ccb8d729bb0ef15d/inf/RXpBKxUYQGarPOjyY-59VGQ_EgiKPWf0XaLkvPKPHqmx2m0maZLec70rkRLI4iQwFffTYxpeSVUY8ZagoW_q8Q%3D%3D?uid=795455607&filename=VANS_KNU_SKOOL_BLACK_CHILD_5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=795455607&tknv=v2&size=2552x1362',
      ],
      categoryId: 2,
      male: 'CHILD',
      brand: 'vans',
      model: 'knu skool',
      mainColorEN: 'black',
      mainColorRU: 'черный',
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: AIR_FORCE_1_MEDIUM_STARFISH_OLIVE_BLACK_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantityOfProductItem: 5,
        size: 39,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_STARFISH_OLIVE_BLACK_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(12000, 13000),
        quantityOfProductItem: 3,
        size: 40,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_STARFISH_OLIVE_BLACK_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(13000, 14000),
        quantityOfProductItem: 7,
        size: 41,
      },
      {
        productId: AIR_FORCE_1_MEDIUM_STARFISH_OLIVE_BLACK_MEN.id,
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
      {
        productId: ADIDAS_FORUM_LOW_GRAY_BLUE_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantityOfProductItem: 5,
        size: 39,
      },
      {
        productId: ADIDAS_FORUM_LOW_GRAY_BLUE_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantityOfProductItem: 3,
        size: 40,
      },
      {
        productId: ADIDAS_FORUM_LOW_GRAY_BLUE_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantityOfProductItem: 8,
        size: 41,
      },
      {
        productId: ADIDAS_FORUM_LOW_GRAY_BLUE_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantityOfProductItem: 2,
        size: 42,
      },
      {
        productId: ADIDAS_FORUM_LOW_GRAY_BLUE_MEN.id,
        bootType: 1,
        price: randomDecimalNumber(11000, 12000),
        quantityOfProductItem: 1,
        size: 43,
      },
      {
        productId: DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX.id,
        bootType: 4,
        price: randomDecimalNumber(17000, 18000),
        quantityOfProductItem: 3,
        size: 41,
      },
      {
        productId: DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX.id,
        bootType: 4,
        price: randomDecimalNumber(17000, 18000),
        quantityOfProductItem: 1,
        size: 42,
      },
      {
        productId: DR_MARTENS_1460_SMOOTH_LEATHER_UNISEX.id,
        bootType: 4,
        price: randomDecimalNumber(17000, 18000),
        quantityOfProductItem: 2,
        size: 43,
      },
      {
        productId: VANS_KNU_SKOOL_BLUE_UNISEX.id,
        bootType: 2,
        price: randomDecimalNumber(7000, 7500),
        quantityOfProductItem: 1,
        size: 37,
      },
      {
        productId: VANS_KNU_SKOOL_BLUE_UNISEX.id,
        bootType: 2,
        price: randomDecimalNumber(7000, 7500),
        quantityOfProductItem: 3,
        size: 38,
      },
      {
        productId: VANS_KNU_SKOOL_BLUE_UNISEX.id,
        bootType: 2,
        price: randomDecimalNumber(7000, 7500),
        quantityOfProductItem: 1,
        size: 40,
      },
      {
        productId: VANS_KNU_SKOOL_BLUE_UNISEX.id,
        bootType: 2,
        price: randomDecimalNumber(7000, 7500),
        quantityOfProductItem: 2,
        size: 41,
      },
      {
        productId: VANS_KNU_SKOOL_BLACK_CHILD.id,
        bootType: 2,
        price: randomDecimalNumber(7000, 7500),
        quantityOfProductItem: 1,
        size: 27,
      },
      {
        productId: VANS_KNU_SKOOL_BLACK_CHILD.id,
        bootType: 2,
        price: randomDecimalNumber(7000, 7500),
        quantityOfProductItem: 3,
        size: 28,
      },
      {
        productId: VANS_KNU_SKOOL_BLACK_CHILD.id,
        bootType: 2,
        price: randomDecimalNumber(7000, 7500),
        quantityOfProductItem: 1,
        size: 30,
      },
      {
        productId: VANS_KNU_SKOOL_BLACK_CHILD.id,
        bootType: 2,
        price: randomDecimalNumber(7000, 7500),
        quantityOfProductItem: 2,
        size: 31,
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
