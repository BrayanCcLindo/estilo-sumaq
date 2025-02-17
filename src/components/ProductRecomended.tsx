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
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductRecomended;
