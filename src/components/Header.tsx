"use client";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

import CartItemsModal from "./CartItemsModal";
import SocialShare from "./socialShare";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useCategoryStore } from "@/hook/useCategoryProduct";

const categories = [
  "Todos",
  "Mochila",
  "Cartera",
  "Monedero",
  "Pack Artesanal",
];
const Header = () => {
  const setCategory = useCategoryStore((state) => state.setCategory);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                <Link href="/sign-up" className="text-lg font-medium">
                  sign up
                </Link>
                <Link href="/log-in" className="text-lg font-medium">
                  log in
                </Link>
                <Link
                  href="/category/accessories"
                  className="text-lg font-medium"
                >
                  Accessories
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-xl font-bold text-transparent">
              SUMAQ
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Select
              onValueChange={setCategory}
              // defaultValue={selectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link
              href="/contact"
              className="transition-colors hover:text-purple-600"
            >
              Contáctanos
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <CartItemsModal />
          <SocialShare />
        </div>
      </div>
    </header>
  );
};

export default Header;
