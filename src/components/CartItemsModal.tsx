"use client";

import { useState } from "react";
import { BaggageClaim, ShoppingCart, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { useShoppingCart } from "@/hook/useShoppingCart";
import Image from "next/image";
import { generateWhatsAppMessage, getWhatsAppLink } from "@/utils/wspMessage";

export default function CartItemsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cartItems = useShoppingCart((state) => state.items);
  const removeItem = useShoppingCart((state) => state.removeItem);

  const hasItems = cartItems.length > 0;

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen);
    }
  };
  const handleWhatsAppOrder = () => {
    setIsLoading(true);
    const message = generateWhatsAppMessage(cartItems);
    const phoneNumber = "922446911";
    const whatsappLink = getWhatsAppLink(message, phoneNumber);
    window.open(whatsappLink, "_blank");
    setIsLoading(false);
  };
  const total = cartItems.reduce(
    (sum, item) => sum + parseInt(item.price) * item.quantity,
    0,
  );

  return (
    <Sheet open={isOpen} onOpenChange={handleOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-none bg-transparent shadow-none"
        >
          {cartItems.length > 0 ? (
            <>
              <BaggageClaim />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartItems.length}
              </span>
            </>
          ) : (
            <ShoppingCart className="h-6 w-6" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-full w-[400px] flex-col sm:w-[540px]"
      >
        <SheetHeader>
          <SheetTitle>Tu carrito</SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-auto py-4">
          {cartItems?.map((item) => (
            <div
              key={item.id}
              className="group relative flex gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-300"
            >
              <Image
                src={item.imagen}
                alt={item.title}
                width={300}
                height={400}
                className="h-24 w-24 rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.title}</h3>

                <p className="font-semibold text-gray-800">${item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </span>
                </div>
              </div>
              {/* Remove button that appears on hover */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute right-2 top-2 rounded-full bg-white p-2 opacity-0 transition-opacity hover:bg-red-50 group-hover:opacity-100"
              >
                <Trash2 size={20} className="text-red-500" />
              </button>
            </div>
          ))}
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-medium">Total</span>
          <span className="text-2xl font-bold">S/.{total}</span>
        </div>
        <SheetFooter className="mt-auto">
          <Button
            className="w-full"
            onClick={handleWhatsAppOrder}
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Pedir por WhatsApp"}
          </Button>
        </SheetFooter>
        <SheetClose className="absolute right-5 top-5">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
