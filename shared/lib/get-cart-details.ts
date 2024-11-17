import { bootTypes, categoriesTypes } from '@/prisma/constants';

interface Product {
  id: number;
  name: string;
  previewImageUrl: string;
  hoverPreviewImageUrl: string;
  images: string[];
  brand: string;
  model: string;
  mainColorEN: string;
  mainColorRU: string;
  male: 'MALE' | 'FEMALE' | 'UNISEX';
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

interface ProductItem {
  id: number;
  price: number;
  quantityOfProductItem: number;
  size: number;
  bootType: number;
  productId: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

interface StateCartItem {
  id: number;
  productItemId: number;
  cartId: number;
  quantityInCart: number;
  createdAt: string;
  updatedAt: string;
  productItem: ProductItem;
}

interface StateCart {
  id: number;
  userId: number;
  totalAmount: number;
  token: string;
  createdAt: string;
  updatedAt: string;
  items: StateCartItem[];
}

interface ReturnProps {
  items: Array<{
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    type: string;
    size: number;
  }>;
  totalAmount: number;
}

export const getCartDetails = (data: StateCart): ReturnProps => {
  const items = data.items.map((item: StateCartItem) => ({
    id: item.id,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.previewImageUrl,
    price: item.productItem.price,
    size: item.productItem.size,
    type: `${
      categoriesTypes.find(
        (catType) => catType.value === String(item.productItem.product.categoryId),
      )?.name
    } ${bootTypes.find((bootType) => bootType.value === item.productItem.product.male)?.name}:`,
  }));

  // const totalAmount = items.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue.price,
  //   0,
  // );

  const totalAmount = data.totalAmount;
  return {
    items,
    totalAmount,
  };
};
