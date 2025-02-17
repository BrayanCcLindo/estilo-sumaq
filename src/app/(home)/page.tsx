import { getProducts } from "@/actions/getProducts";
import ProductCard from "@/components/ProductCard";

// export const metaData: Metadata = {
//   title: "PRIMERA PAGINA",
//   description: "Home page",
// };
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
