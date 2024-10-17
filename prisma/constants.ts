export const categories = [
  { name: 'Кроссовки' },
  { name: 'Кеды' },
  { name: 'Сандалии' },
  { name: 'Ботинки' },
];

const mapCategories = {
  1: 'Кроссовки',
  2: 'Кеды',
  3: 'Сандалии',
  4: 'Ботинки',
} as const;

const mapBootType = {
  MALE: 'мужские',
  FEMALE: 'женские',
  CHILD: 'детские',
  UNISEX: 'унисекс',
} as const;

export const categoriesTypes = Object.entries(mapCategories).map(([value, name]) => ({
  name,
  value,
}));

export const bootTypes = Object.entries(mapBootType).map(([value, name]) => ({ name, value }));
