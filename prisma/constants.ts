export const categories = [
  { name: 'Кроссовки' },
  { name: 'Кеды' },
  { name: 'Сандалии' },
  { name: 'Ботинки' },
];

const mapBootType = {
  MALE: 'мужские',
  FEMALE: 'женские',
  CHILD: 'детские',
  UNISEX: 'мужские',
} as const;

export const bootTypes = Object.entries(mapBootType).map(([value, name]) => ({ name, value }));
