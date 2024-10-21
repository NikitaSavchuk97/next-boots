import { create } from 'zustand';
import { Api } from '../services/api-client';
import { getCartDetails } from '../lib/get-cart-details';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: any;

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
      set({ loading: true, error: false });
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetails(data));
      set({ loading: false });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
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
