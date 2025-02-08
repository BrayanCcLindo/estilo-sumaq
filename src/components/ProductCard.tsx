"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { useFavoriteItem } from "@/hook/useFavorite";
import Link from "next/link";
interface ProductCardInterface {
  product: Product;
}
function ProductCard({ product }: ProductCardInterface) {
  const addToFavorite = useFavoriteItem((state) => state.addFavorite);

  const handleFavorite = (product: Product) => {
    addToFavorite(product);
  };

  return (
    <div className="group relative rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <Link
        href={`/product/${product.URL}?id=${product.id}`}
        key={product.id}
        className="overflow-hidden bg-white"
      >
        <div className="relative block">
          <div className="aspect-square overflow-hidden">
            <Image
              src={product.IMAGEN || "/home/main-image.avif"}
              alt={product.TITULO}
              className="h-full w-full transform object-cover object-center transition-transform duration-300 group-hover:scale-105"
              fill
            />
          </div>
          {/* <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
      {product.isNew && <Badge className="bg-accent-500 hover:bg-accent-600">New</Badge>}
      {product.discount && <Badge className="bg-primary-500 hover:bg-primary-600">-{product.discount}%</Badge>}
    </div> */}
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h3 className="group-hover:text-primary-600 mb-1 text-lg font-semibold transition-colors">
              {product.TITULO}
            </h3>
            <p className="text-sm text-gray-500">{product.CATEGORIA}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-primary-600 text-xl font-bold">
                ${product.PRICE1}
              </span>
              {product.PRICE1 && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.PRICE1}
                </span>
              )}
            </div>
            <Button
              // onClick={(e) => {
              //   e.preventDefault()
              //   addToCart(product)
              // }}
              size="icon"
              className="bg-accent-500 hover:bg-accent-600 rounded-full text-black"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Link>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        onClick={() => {
          handleFavorite(product);
        }}
      >
        <Heart className="text-primary-500 h-5 w-5" />
      </Button>
    </div>
  );
}

export default ProductCard;
