"use client";

import { useState } from "react";
import { BaggageClaim, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useShoppingCart } from "@/hook/useShoppingCart";
import Image from "next/image";

export default function CartItemsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const cartItems = useShoppingCart((state) => state.items);
  const removeItem = useShoppingCart((state) => state.removeItem);

  const hasItems = cartItems.length > 0;

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen);
    }
  };
  console.log(setIsBuying, "setIsBuying");

  return (
    <Sheet open={isOpen} onOpenChange={handleOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
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
              className="group relative mb-4 flex items-center rounded-lg border-b p-2 transition-colors duration-200 hover:bg-gray-100"
            >
              <Image
                src={item.IMAGEN || "/placeholder.svg"}
                alt={item.TITULO}
                width={60}
                height={60}
                className="mr-4 rounded-md"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.TITULO}</h3>
                <p className="text-sm text-gray-600">{item.id}</p>
                <p className="text-sm text-gray-600">{item.CANTIDAD}</p>
              </div>
              <span className="mr-8 font-bold">${item.PRICE1}</span>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-5 w-5 text-red-500" />
              </Button>
            </div>
          ))}
        </div>
        <SheetFooter className="mt-auto">
          <Button
            disabled={isBuying}
            className="w-full"
            // onClick={handleBuy}
          >
            Comprar ahora
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
