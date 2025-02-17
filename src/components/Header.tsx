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
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const categories = [
  {
    categoria: "Bolsos y Mochilas",
    link: "mochila",
  },
  { categoria: "Accesorios para llevar", link: "cartera" },
  { categoria: "Joyeria y complementos", link: "monedero" },
  { categoria: "Organización Personal", link: "personal" },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = () => {
    setOpen(false);
    if (pathname !== "/") {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href="/"
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="mr-6 flex items-center space-x-2 md:hidden"
                  >
                    <Image
                      width={300}
                      height={300}
                      src={"/logo2.png"}
                      alt="logo"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                <DropdownMenu onOpenChange={setOpen}>
                  <DropdownMenuTrigger className="rounded-md text-left">
                    Categorías
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {categories.map((category) => (
                      <DropdownMenuItem
                        onClick={handleSelect}
                        key={category.categoria}
                      >
                        <Link
                          href={`/categoria/${category.link}`}
                          className="w-full"
                        >
                          {category.categoria}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  href="/contact"
                  className="transition-colors"
                >
                  Contáctanos
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="mr-6 hidden items-center space-x-2 md:flex">
            <Image
              width={130}
              height={130}
              src={"/logo-sumaq.png"}
              alt="logo"
            />
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-md p-2">
                Categorías
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category) => (
                  <DropdownMenuItem key={category.categoria}>
                    <Link
                      href={`/categoria/${category.link}`}
                      className="w-full"
                    >
                      {category.categoria}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/contact" className="transition-colors">
              Contáctanos
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <SocialShare />
          <CartItemsModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
