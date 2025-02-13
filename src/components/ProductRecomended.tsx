import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

async function ProductRecomended({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) {
  return (
    <div>
      {relatedProducts && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">
                Productos Relacionados
              </h2>
              <Button
                variant="ghost"
                className="hidden items-center gap-2 sm:flex"
              >
                Ver más <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductRecomended;
