import { getProducts } from "@/actions/getProducts";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estilo Sumaq | Diseños de tradición Peruana",
  description:
    "Diseños que inspiran, raíces que perduran, productos artesanales con un toque contemporáneo",
  keywords: [
    "tienda",
    "productos artesanales",
    "mochilas artesanales",
    "carteras artesanal",
    "monederos artesanal",
    "llaveros artesanal",
  ],
};
export default async function Home() {
  const products = await getProducts();

  return (
    <div className="grid w-full grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
