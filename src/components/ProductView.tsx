"use client";
import Image from "next/image";
import { MessageCircle, ShoppingCart, Tag } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "@/hook/useShoppingCart";
import { toast } from "sonner";

interface ProductViewProps {
  product: Product;
}

type TabType = "description" | "features" | "care";

export const ProductView = ({ product }: ProductViewProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("features");
  const discount = product.price + product.price * 0.12;

  const handleWhatsAppClick = () => {
    const phoneNumber = "+51963321483";
    const message = `Hola, estoy interesado en este producto:
  *${product.title}*
  Precio: S/ ${product.price}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  const { addItem, updateQuantity } = useShoppingCart();
  const [cantidad, setCantidad] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      setCantidad(newQuantity);
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleAddToCart = () => {
    addItem(product, cantidad);
    toast.success("Agrego un producto al carrito", {
      duration: 3000,
      position: "top-center",
    });
  };

  return (
    <div className="space-y-16">
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Imagen del producto */}
          <div className="relative h-[500px] lg:h-full">
            <Image
              src={product.imagen}
              alt={product.title}
              width={400}
              height={400}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {product.offer && (
              <div className="absolute right-4 top-4">
                <div className="flex items-center rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white">
                  <Tag className="mr-2 h-4 w-4" />
                  Oferta Especial
                </div>
              </div>
            )}
          </div>
          <div className="flex h-[550px] flex-1 flex-col justify-between p-8">
            <div className="flex flex-col gap-4">
              <p className="mb-2 text-sm capitalize text-gray-500">
                {product.category.toUpperCase()}
              </p>
              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <div className="mb-4 flex items-baseline">
                {product.offer ? (
                  <>
                    <span className="mr-3 text-3xl font-bold text-red-500">
                      {product.price.toLocaleString("es-PE", {
                        currency: "PEN",
                        style: "currency",
                      })}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      {discount.toLocaleString("es-PE", {
                        currency: "PEN",
                        style: "currency",
                      })}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price.toLocaleString("es-PE", {
                      currency: "PEN",
                      style: "currency",
                    })}
                  </span>
                )}
              </div>

              <p className="mb-6 leading-relaxed text-gray-600">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col items-start justify-end gap-4 md:flex-row">
              <Button onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Pedir por WhatsApp
              </Button>
              <div className="flex items-center justify-start">
                <Button onClick={() => handleQuantityChange(cantidad - 1)}>
                  -
                </Button>
                <span className="bg-gray-100 px-4 py-1">{cantidad}</span>
                <Button onClick={() => handleQuantityChange(cantidad + 1)}>
                  +
                </Button>
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  size="icon"
                  className="ml-4"
                >
                  <ShoppingCart />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("features")}
                className={`border-b-2 px-1 pb-4 text-lg font-medium ${
                  activeTab === "features"
                    ? "border-slate-900 text-slate-900"
                    : "border-transparent text-gray-600 hover:border-gray-600 hover:text-gray-600"
                }`}
              >
                Características
              </button>
              <button
                onClick={() => setActiveTab("care")}
                className={`border-b-2 px-1 pb-4 text-lg font-medium ${
                  activeTab === "care"
                    ? "border-slate-900 text-slate-900"
                    : "border-transparent text-gray-600 hover:border-gray-600 hover:text-gray-600"
                }`}
              >
                Cuidados
              </button>
            </nav>
          </div>
          <div className="mt-6">
            {activeTab === "features" && (
              <div className="space-y-4">
                {product.detalles.map((feature, index) => {
                  const [title, description] = Object.entries(feature)[0];

                  return (
                    <div key={index} className="border-b pb-4">
                      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === "care" && (
              <div className="prose prose-sm text-gray-600">
                <ul className="space-y-2">
                  <li>Limpiar suavemente con un paño húmedo</li>
                  <li>Evitar la exposición prolongada al sol</li>
                  <li>Guardar en un lugar fresco y seco</li>
                  <li>No usar productos químicos agresivos</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
