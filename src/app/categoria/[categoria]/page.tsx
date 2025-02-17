import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getProductsByCategory } from "@/actions/getProducts";
import ProductCard from "@/components/ProductCard";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type PageProps<T extends Record<string, string> = {}> = {
  params: Promise<T>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function CategoryPage({
  params,
}: PageProps<{ categoria: string }>) {
  const { categoria } = await params;
  const products = await getProductsByCategory(categoria);
  const getBackgroundImage = (category: string) => {
    switch (category.toLowerCase()) {
      case "monederos":
        return "/portada/portada-monedero.jpeg";
      case "bolsos":
        return "/portada/portada-bags.jpeg";
      case "mochila":
        return "/portada/portada-bags.jpeg";
      case "personal":
        return "/portada/portada-organizacion.jpeg";
      default:
        return "/portada1.jpeg";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-72 md:h-80 lg:h-[400px]">
        <Image
          src={getBackgroundImage(categoria)}
          alt={`Banner de ${categoria}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold capitalize text-white md:text-5xl lg:text-6xl">
            {categoria}
          </h1>
        </div>
        <Link
          href="/"
          className="absolute left-4 top-4 z-10 rounded-full bg-white/80 p-2 transition-colors hover:bg-white"
        >
          <ArrowLeft className="h-6 w-6 text-gray-800" />
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product, index) => (
            <ProductCard product={product} index={index} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
