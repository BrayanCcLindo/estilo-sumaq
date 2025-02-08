import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  clearCart: () => void;
}

// const saveArrayToLocalStorage = (array: CartItem[]) => {
//   localStorage.setItem("cart", JSON.stringify(array));
// };

// export const useShoppingCart = create<Store>((set) => ({
//   cart: (() => {
//     if (typeof window === "undefined") {
//       return [];
//     }

//     const cart = localStorage.getItem("cart");
//     if (cart) {
//       return JSON.parse(cart);
//     }

//     return [];
//   })(),
//   addToCart: (itemCart) =>
//     set((state) => {
//       // Verificamos si el producto ya existe en el carrito
//       const existingItemIndex = state.cart.findIndex(
//         (item) => item.id === itemCart.id,
//       );

//       // Si el producto no existe, lo agregamos al carrito
//       if (existingItemIndex === -1) {
//         const newCart = [...state.cart, itemCart];
//         saveArrayToLocalStorage(newCart);
//         return { cart: newCart };
//       }

//       // Si el producto existe, actualizamos solo su cantidad
//       const updatedCart = {
//         cart: [
//           ...state.cart.slice(0, existingItemIndex),
//           { ...state.cart[existingItemIndex], quantity: itemCart.quantity },
//           ...state.cart.slice(existingItemIndex + 1),
//         ],
//       };

//       saveArrayToLocalStorage(updatedCart.cart);
//       return updatedCart;
//     }),
//   removeFromCart: (cartItemId) =>
//     set((state) => {
//       const currentCart = state.cart;
//       const newCart = currentCart.filter((item) => item.id !== cartItemId);
//       saveArrayToLocalStorage(newCart);

//       return {
//         cart: newCart,
//         //   cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
//       };
//     }),
//   //   getProductQuantity: (productId) => {
//   //     return get()
//   //       .cart.filter((item) => item.id === productId)
//   //       .reduce((total, item) => total + item.quantity, 1);
//   //   },
// }));

export const useFavoriteItem = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addFavorite: (product) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id,
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.CANTIDAD + 1 }
                  : item,
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        });
      },
      removeFavorite: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "favorite-storage",
    },
  ),
);
