"use client";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ProductCardInterface {
  product: Product;
  index: number;
}
function ProductCard({ product, index }: ProductCardInterface) {
  const discount = product.price + product.price * 0.15;
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for smooth animation
        opacity: { duration: 0.8 },
        scale: { duration: 0.7 },
        rotateX: { duration: 0.7 },
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="perspective w-full"
    >
      <Link
        href={`/product/${product.slug}?id=${product.id}`}
        key={product.id}
        className="group relative h-[420px]"
      >
        <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
          {product.offer && (
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
              height={300}
              className="h-72 w-full object-cover object-center md:h-64"
            />
          </div>
          <div className="p-4">
            <p className="mb-1 text-sm text-gray-500">
              {product.category.toUpperCase()}
            </p>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              {product.title}
            </h3>
            <div className="flex items-center space-x-2">
              {product.offer ? (
                <>
                  <span className="text-lg font-bold text-red-500">
                    {product.price.toLocaleString("es-PE", {
                      currency: "PEN",
                      style: "currency",
                    })}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {discount.toLocaleString("es-PE", {
                      currency: "PEN",
                      style: "currency",
                    })}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-900">
                  {product.price.toLocaleString("es-PE", {
                    currency: "PEN",
                    style: "currency",
                  })}
                </span>
              )}
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-5" />
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;
