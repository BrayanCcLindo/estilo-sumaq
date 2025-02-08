"use client";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import SanitizeHTML from "./SanitizeHTML";
import { useShoppingCart } from "@/hook/useShoppingCart";

interface ProductViewProps {
  product: Product;
}

// const product = {
//   id: "1",
//   title: "Auriculares inalámbricos premium",
//   price: 129.99,
//   image: "/placeholder.svg?height=600&width=600",
//   description:
//     "Experimenta un sonido inmersivo con nuestros auriculares inalámbricos de última generación. Diseñados para ofrecer la mejor calidad de audio y comodidad durante largas sesiones de uso.",
//   features: [
//     "Cancelación activa de ruido",
//     "Hasta 30 horas de duración de batería",
//     "Conectividad Bluetooth 5.0",
//     "Controles táctiles intuitivos",
//     "Resistente al agua y al sudor (IPX4)",
//   ],
//   specs: {
//     Tipo: "Over-ear",
//     "Respuesta de frecuencia": "20Hz - 20kHz",
//     Impedancia: "32 Ohm",
//     Sensibilidad: "105 dB/mW",
//     Peso: "250g",
//   },
//   rating: 4.8,
//   reviews: 1234,
//   discounted: true,
// };
export const ProductView = ({ product }: ProductViewProps) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = useShoppingCart((state) => state.addItem);

  const handleUpdateCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="animate-fadeInUp overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="image-zoom">
            <Image
              src={product.IMAGEN || "/home/main-image.avif"}
              alt={product.TITULO}
              width={600}
              height={600}
              layout="responsive"
              className="object-cover"
            />
          </div>
        </div>
        <div className="animate-fadeInUp animate-delay-200 flex flex-col justify-between">
          <div>
            <h1 className="mb-4 text-3xl font-bold">{product.TITULO}</h1>
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.RATING) ? "fill-current" : "stroke-current"}`}
                  />
                ))}
              </div>
              {/* <span className="text-gray-600">
                  ({product.reviews} reseñas)
                </span> */}
            </div>
            <SanitizeHTML tag="p" className="mb-6 text-gray-700">
              {product.DESCRIPCION}
            </SanitizeHTML>
            <SanitizeHTML tag="p" className="mb-6 text-gray-700">
              {product.DESCRIPCION}
            </SanitizeHTML>
            <SanitizeHTML tag="p" className="mb-6 text-gray-700">
              {product.DESCRIPCION}
            </SanitizeHTML>
            {/* <div className="mb-6 flex items-center space-x-4">
                {product.discounted ? (
                  <>
                    <p className="text-2xl font-bold text-red-600">
                      ${product.price * 0.85}
                    </p>
                    <p className="text-lg text-gray-500 line-through">
                      ${product.price}
                    </p>
                    <span className="rounded bg-red-100 px-2 py-1 text-sm font-semibold text-red-800">
                      15% OFF
                    </span>
                  </>
                ) : (
                  <p className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </p>
                )}
              </div> */}
            <div className="mb-6 flex items-center justify-between space-x-4">
              <p className="px-4 py-2 text-2xl font-bold">
                ${product.PRICE1 || 25 * 0.85}
              </p>
              {/* <div className="mb-6 flex items-center space-x-4">
                  <Button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    variant="outline"
                    size="icon"
                    className="button-hover"
                  >
                    -
                  </Button>
                  <span className="text-xl font-semibold">{quantity}</span>
                  <Button
                    onClick={() => setQuantity(quantity + 1)}
                    variant="outline"
                    size="icon"
                    className="button-hover"
                  >
                    +
                  </Button>
                </div> */}
              <div className="flex items-center font-bold">
                <span className="mr-2 text-lg text-gray-500 line-through">
                  ${product.PRICE1 || "25"}
                </span>
                <span className="rounded-full bg-red-500 px-2 py-1 text-sm font-semibold text-white">
                  15% OFF
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="quantity-control flex items-center overflow-hidden rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-white px-3 py-2 text-green-500 focus:outline-none"
                >
                  <Minus size={20} />
                </button>
                <span className="bg-white px-4 py-2 text-xl font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-white px-3 py-2 text-green-500 focus:outline-none"
                >
                  <Plus size={20} />
                </button>
              </div>
              <button
                onClick={handleUpdateCart}
                className="flex items-center rounded-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] px-6 py-3 font-bold text-white transition-all duration-300 ease-in-out"
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="animate-fadeInUp animate-delay-400 mt-12">
        {/* <Tabs defaultValue="features" className="w-full">
            <TabsList>
              <TabsTrigger value="features">Características</TabsTrigger>
              <TabsTrigger value="specs">Especificaciones</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <ul className="list-disc space-y-2 pl-5">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specs">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{key}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{value}</dd>
                  </div>
                ))}
              </dl>
            </TabsContent>
          </Tabs> */}
      </div>
    </div>
  );
};
