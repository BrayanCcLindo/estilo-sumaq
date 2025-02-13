"use client";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";
interface ProductCardInterface {
  product: Product;
}
function ProductCard({ product }: ProductCardInterface) {
  return (
    <Link
      href={`/product/${product.slug}?id=${product.id}`}
      key={product.id}
      className="group relative h-[420px]"
    >
      <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        {true && (
          <div className="absolute right-4 top-4 z-10">
            <div className="flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
              <Tag className="mr-1 h-4 w-4" />
              Oferta
            </div>
          </div>
        )}
        <div className="aspect-w-1 aspect-h-1 w-full">
          <Image
            src={product.imagen}
            alt={product.title}
            width={300}
            height={400}
            className="h-64 w-full object-cover object-center"
          />
        </div>
        <div className="p-4">
          <p className="mb-1 text-sm text-gray-500">{product.category}</p>
          <h3 className="mb-2 text-lg font-medium text-gray-900">
            {product.title}
          </h3>
          <div className="flex items-center space-x-2">
            {true ? (
              <>
                <span className="text-lg font-bold text-red-500">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-5" />
      </div>
    </Link>
  );
}

export default ProductCard;
