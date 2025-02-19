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
interface CategoryAssets {
  backgroundImage: string;
  title: string;
}

export async function generateMetadata({
  params,
}: PageProps<{ categoria: string }>) {
  const resolvedSearchParams = await params;
  const getCategoryAssets = (category: string | undefined): CategoryAssets => {
    const categoryLower = category?.toLowerCase();

    switch (categoryLower) {
      case "accesorios-para-llevar":
        return {
          backgroundImage: "/portada/portada-monedero.jpg",
          title: "Accesorios para llevar",
        };
      case "bolsos-y-mochilas":
        return {
          backgroundImage: "/portada/portada-bags.jpg",
          title: "Bolsos y Mochilas",
        };
      case "joyeria-y-complementos":
        return {
          backgroundImage: "/portada/portada-joyas.jpg",
          title: "Joyeria y complementos",
        };
      case "organizacion-personal":
        return {
          backgroundImage: "/portada/portada-organizacion.jpg",
          title: "Organización Personal",
        };
      default:
        return {
          backgroundImage: "/home/main-portada.jpg",
          title: "Nuestra Colección",
        };
    }
  };
  const id =
    typeof resolvedSearchParams.categoria === "string"
      ? resolvedSearchParams.categoria
      : Array.isArray(resolvedSearchParams.categoria)
        ? resolvedSearchParams.categoria[0]
        : undefined;
  const { backgroundImage, title } = getCategoryAssets(id);

  return {
    title: `${title} | Estilo Sumaq`,
    description: `Revisa cada uno de nuestras categorias de nuestros productos artesanales y escoje tu favorito`,
    Image: backgroundImage,
  };
}

export default async function CategoryPage({
  params,
}: PageProps<{ categoria: string }>) {
  const { categoria } = await params;
  const products = await getProductsByCategory(categoria);

  const getCategoryAssets = (category: string): CategoryAssets => {
    const categoryLower = category.toLowerCase();

    switch (categoryLower) {
      case "accesorios-para-llevar":
        return {
          backgroundImage: "/portada/portada-monedero.jpg",
          title: "Accesorios para llevar",
        };
      case "bolsos-y-mochilas":
        return {
          backgroundImage: "/portada/portada-bags.jpg",
          title: "Bolsos y Mochilas",
        };
      case "joyeria-y-complementos":
        return {
          backgroundImage: "/portada/portada-joyas.jpg",
          title: "Joyeria y complementos",
        };
      case "organizacion-personal":
        return {
          backgroundImage: "/portada/portada-organizacion.jpg",
          title: "Organización Personal",
        };
      default:
        return {
          backgroundImage: "/home/main-portada.jpg",
          title: "Nuestra Colección",
        };
    }
  };
  const { backgroundImage, title } = getCategoryAssets(categoria);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-80 md:h-80 lg:h-[500px]">
        <Image
          src={backgroundImage}
          alt={`Banner de ${categoria}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold capitalize text-white md:text-5xl lg:text-6xl">
            {title}
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
