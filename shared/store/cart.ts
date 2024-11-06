import { create } from 'zustand';
import { Api } from '../services/api-client';
import { getCartDetails } from '../lib/get-cart-details';
import { ProductItem } from '@prisma/client';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: any;
  disabled?: boolean;

  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  addCartItem: (values: any) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,
  disabled: false,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
      set({ loading: false });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item: ProductItem) =>
          item.id === id ? { ...item, disabled: true } : item,
        ),
      }));
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetails(data));
      set({ loading: false });
    } catch (error) {
      console.error(error);
    } finally {
      set((state) => ({
        loading: false,
        items: state.items.map((item: ProductItem) =>
          item.id === id ? { ...item, disabled: false } : item,
        ),
      }));
    }
  },

  addCartItem: async (id: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(id);
      set(getCartDetails(data));
      set({ loading: false });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async (id: number, quantity: number) => {},
}));
