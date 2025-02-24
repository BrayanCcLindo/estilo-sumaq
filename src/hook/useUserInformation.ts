import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CheckoutStore {
  formData: CheckoutFormData | null;
  orderDetails: {
    orderNumber: string;
    orderDate: string;
    total: string;
  } | null;
  setFormData: (data: CheckoutFormData) => void;
  setOrderDetails: (data: {
    orderNumber: string;
    orderDate: string;
    total: string;
  }) => void;
  reset: () => void;
}

export const useCheckoutStore = create<CheckoutStore>()(
  persist(
    (set) => ({
      formData: null,
      orderDetails: null,
      setFormData: (data) => set({ formData: data }),
      setOrderDetails: (data) => set({ orderDetails: data }),
      reset: () => set({ formData: null, orderDetails: null }),
    }),
    {
      name: "checkout-storage",
    },
  ),
);
