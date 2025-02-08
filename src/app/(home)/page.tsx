import { getProducts } from "@/actions/getProducts";
import ProductCard from "@/components/ProductCard";

// export const metaData: Metadata = {
//   title: "PRIMERA PAGINA",
//   description: "Home page",
// };
export default async function Home() {
  const products = await getProducts();

  // const listaArray = lista
  //   .replace('";', "")
  //   .split("?")
  //   .map((item) => item.trim())
  //   .filter((item) => item.length > 0);

  return (
    // <div className="grid items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
    //   <h1 className="text-4xl">
    //     Tu eres el mejor solo tienes que creertela, has a mama y papa orgullosos
    //   </h1>
    //   <ol>
    //     {listaArray.map((lista, index) => (
    //       <li key={index}>-{lista}</li>
    //     ))}
    //   </ol>
    //   <MainProducts />
    // </div>

    <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
