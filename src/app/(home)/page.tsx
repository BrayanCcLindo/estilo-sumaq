"use client";
import { getProducts } from "@/actions/getProducts";
import ProductCard from "@/components/ProductCard";
import { useCategoryStore } from "@/hook/useCategoryProduct";
import { useEffect, useState } from "react";
import Loading from "./loading";

// export const metaData: Metadata = {
//   title: "PRIMERA PAGINA",
//   description: "Home page",
// };
export default function Home() {
  const { category } = useCategoryStore();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const fetchedProducts = await getProducts(category);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 px-2 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
