import { ReactNode } from 'react';

export interface BrandsReturnPropsTypes {
  brands: { value: string; text: string }[];
  defaultBrands: { value: string; text: string }[];
  loading: boolean;
}

export interface CheckboxFiltersGroupPropsTypes {
  search?: boolean;
  title: string;
  items: FilterChecboxPropsTypes[];
  defaultItems?: FilterChecboxPropsTypes[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  loading: boolean;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name: string;
}

export interface ClassNamePropsTypes {
  className?: string;
}

export interface ColorsReturnPropsTypes {
  colors: { value: string; text: string }[];
  defaultColors: { value: string; text: string }[];
  loading: boolean;
}

export interface FilterChecboxPropsTypes {
  text: string;
  value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export interface PricePropsTypes {
  priceFrom?: number;
  priceTo?: number;
}

export interface ProductCardPropsTypes {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export interface ProductsGroupListPropsTypes {
  title: string;
  items: any[];
  categotyId: number;
  className?: string;
  listClassName?: string;
}

export interface QueryFiltersPropsTypes extends PricePropsTypes {
  gender: string;
  stock: string;
  size: string;
  color: string;
  brand: string;
}

export interface SliderPropsTypes {
  className?: string;
  min: number;
  max: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
}

export interface TitlePropsTypes {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  text: string;
}

export interface UseFiltersPropsTypes {
  sizes: Set<string>;
  prices: PricePropsTypes;
  gender: Set<string>;
  inStock: string | undefined;
  selectedColors: Set<string>;
  selectedBrands: Set<string>;
}

export interface UseFiltersReturnPropsTypes extends UseFiltersPropsTypes {
  setInStock: (key: string | undefined) => void;
  setSize: (key: string) => void;
  setBrand: (key: string) => void;
  setGender: (key: string) => void;
  setColors: (key: string) => void;
  setPrice: (key: keyof PricePropsTypes, value: number) => void;
}
