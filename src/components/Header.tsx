import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import { Input } from "./ui/input";
import CartItemsModal from "./CartItemsModal";
import FavoriteModal from "./favoriteModal";

const Header = async () => {
  // const costumer = await validateAccessToken();

  //   console.log(costumer, "costumer");
  // const cart = await getProducts();
  return (
    // <header className="bg-white shadow-md">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
    //       <div className="flex justify-start lg:w-0 lg:flex-1">
    //         <Link href="/">
    //           <span className="sr-only">Tu Logo</span>
    //           <Image
    //             width={300}
    //             height={300}
    //             className="h-8 w-auto sm:h-10"
    //             src="/next.svg"
    //             alt="Logo"
    //           />
    //         </Link>
    //       </div>
    //       <div className="-my-2 -mr-2 md:hidden">
    //         <button
    //           type="button"
    //           className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    //           //   onClick={() => setIsMenuOpen(!isMenuOpen)}
    //         >
    //           <span className="sr-only">Abrir menu</span>
    //           {/* {isMenuOpen ? (
    //             <X className="h-6 w-6" aria-hidden="true" />
    //           ) : (
    //             <Menu className="h-6 w-6" aria-hidden="true" />
    //           )} */}
    //         </button>
    //       </div>
    //       <nav className="hidden space-x-10 md:flex">
    //         {menuItems.map((item) => (
    //           <Link
    //             key={item.name}
    //             href={item.href}
    //             className="text-base font-medium text-gray-500 hover:text-gray-900"
    //           >
    //             {item.name}
    //           </Link>
    //         ))}
    //       </nav>
    //       <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
    //         {/* <Link
    //           href="/login"
    //           className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
    //         >
    //           Iniciar sesión
    //         </Link>
    //         <Link
    //           href="/registro"
    //           className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    //         >
    //           Registrarsecostumer.firstName
    //         </Link> */}
    //         {costumer ? (
    //           <Avatar username={costumer.firstName} />
    //         ) : (
    //           <Link href={"/login"}>Iniciar sesión</Link>
    //         )}
    //         <div className="relative">
    //           <CartItemsModal />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Menú móvil */}
    //   {/* {isMenuOpen && (
    //     <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
    //       <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
    //         <div className="px-5 pb-6 pt-5">
    //           <div className="flex items-center justify-between">
    //             <div>
    //               <img
    //                 className="h-8 w-auto"
    //                 src="/placeholder.svg?height=32&width=32"
    //                 alt="Logo"
    //               />
    //             </div>
    //             <div className="-mr-2">
    //               <button
    //                 type="button"
    //                 className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    //                 onClick={() => setIsMenuOpen(false)}
    //               >
    //                 <span className="sr-only">Cerrar menu</span>
    //                 <X className="h-6 w-6" aria-hidden="true" />
    //               </button>
    //             </div>
    //           </div>
    //           <div className="mt-6">
    //             <nav className="grid gap-y-8">
    //               {menuItems.map((item) => (
    //                 <Link
    //                   key={item.name}
    //                   href={item.href}
    //                   className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
    //                 >
    //                   <span className="ml-3 text-base font-medium text-gray-900">
    //                     {item.name}
    //                   </span>
    //                 </Link>
    //               ))}
    //             </nav>
    //           </div>
    //         </div>
    //         <div className="space-y-6 px-5 py-6">
    //           <div>
    //             <Link
    //               href="/registro"
    //               className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    //             >
    //               Registrarse
    //             </Link>
    //             <p className="mt-6 text-center text-base font-medium text-gray-500">
    //               ¿Ya tienes una cuenta?{" "}
    //               <Link
    //                 href="/login"
    //                 className="text-indigo-600 hover:text-indigo-500"
    //               >
    //                 Iniciar sesión
    //               </Link>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )} */}
    // </header>

    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <nav className="flex flex-col space-y-4">
                  <Link href="/category/women">Women</Link>
                  <Link href="/category/men">Men</Link>
                  <Link href="/category/accessories">Accessories</Link>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">FASHION</span>
        </Link>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/category/women">Women</Link>
          <Link href="/category/men">Men</Link>
          <Link href="/category/accessories">Accessories</Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>

          <FavoriteModal />

          <CartItemsModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
