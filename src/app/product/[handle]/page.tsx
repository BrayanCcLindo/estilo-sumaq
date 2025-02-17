import { getProductById, getRelatedProducts } from "@/actions/getProducts";
import ProductRecomended from "@/components/ProductRecomended";
import { ProductView } from "@/components/ProductView";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type PageProps<T extends Record<string, string> = {}> = {
  params: Promise<T>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: PageProps<{ handle: string }>) {
  const resolvedSearchParams = await searchParams;

  const id =
    typeof resolvedSearchParams.id === "string"
      ? resolvedSearchParams.id
      : Array.isArray(resolvedSearchParams.id)
        ? resolvedSearchParams.id[0]
        : undefined;
  const product = await getProductById(id);

  return {
    title: product?.title,
    description: product?.description,
    keywords: [product?.category, product?.title],
  };
}

export default async function ProductPage({
  searchParams,
}: PageProps<{ handle: string }>) {
  const resolvedSearchParams = await searchParams;

  const id =
    typeof resolvedSearchParams.id === "string"
      ? resolvedSearchParams.id
      : Array.isArray(resolvedSearchParams.id)
        ? resolvedSearchParams.id[0]
        : undefined;

  if (!id) {
    redirect("/store");
  }

  const product = await getProductById(id);
  const relatedProducts = await getRelatedProducts(id);

  return (
    <>
      {product && <ProductView product={product} />}
      {relatedProducts && (
        <ProductRecomended relatedProducts={relatedProducts} />
      )}
    </>
  );
}
