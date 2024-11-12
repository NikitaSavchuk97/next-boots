import { useEffect } from 'react';
import { useCartStore } from '../store';

export const useCart = () => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
