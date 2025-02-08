import { getProductById } from "@/actions/getProducts";
import { ProductView } from "@/components/ProductView";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type PageProps<T extends Record<string, string> = {}> = {
  params: Promise<T>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductPage({
  params,
  searchParams,
}: PageProps<{ handle: string }>) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  console.log(resolvedParams);

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

  return <>{product && <ProductView product={product} />}</>;
}
