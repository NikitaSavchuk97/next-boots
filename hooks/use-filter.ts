import { useState } from 'react';
import { useSet } from 'react-use';
import { useSearchParams } from 'next/navigation';
import { PricePropsTypes, QueryFiltersPropsTypes, UseFiltersReturnPropsTypes } from '@/lib/types';

export const useFilters = (): UseFiltersReturnPropsTypes => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFiltersPropsTypes, string>;

  const [selectedBrands, { toggle: toggleBrands }] = useSet(
    new Set<string>(searchParams.get('brand')?.split(',')),
  );

  const [selectedColors, { toggle: toggleColors }] = useSet(
    new Set<string>(searchParams.get('color')?.split(',')),
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get('size') ? searchParams.get('size')?.split(',') : []),
  );

  const [gender, { toggle: toggleGender }] = useSet(
    new Set<string>(searchParams.get('gender') ? searchParams.get('gender')?.split(',') : []),
  );

  const [inStock, setInStock] = useState<string | undefined>(
    searchParams.get('stock') === 'true' ? 'true' : undefined,
  );

  const [prices, setPrice] = useState<PricePropsTypes>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const updatePrice = (name: keyof PricePropsTypes, value: number) => {
    setPrice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    inStock,
    setInStock,
    sizes,
    setSize: toggleSizes,
    prices,
    setPrice: updatePrice,
    selectedBrands,
    setBrand: toggleBrands,
    gender,
    setGender: toggleGender,
    selectedColors,
    setColors: toggleColors,
  };
};
