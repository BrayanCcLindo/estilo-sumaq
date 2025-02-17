import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  items: Product[];

  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
}

export const useShoppingCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (product, quantity) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id,
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id ? { ...item, quantity: quantity } : item,
              ),
            };
          }
          return {
            items: [...state.items, { ...product, quantity: quantity }],
          };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, newQuantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item,
          ),
        }));
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
