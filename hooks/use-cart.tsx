import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

import { CartItem, Product } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingCartItem = currentItems.find(
          (item) => item.id === data.id
        );

        if (existingCartItem) {
          existingCartItem.quantity += 1;
        } else {
          set({
            items: [...get().items, { ...data, quantity: 1, itemId: data.id }],
          });
        }

        toast.success('Item added to cart.');
      },
      removeItem: (id: number) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        });
        toast.success('Item removed from cart.');
      },
      removeAll: () => set({ items: [] }),
      increaseQuantity: (id: number) => {
        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        set({ items: updatedItems });
      },
      decreaseQuantity: (id: number) => {
        const updatedItems = get().items.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        set({ items: updatedItems });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
