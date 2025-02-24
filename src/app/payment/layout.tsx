import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pasarela de Pago | Estilo Sumaq",
  description:
    "Información para recibir tus productos artesanales lo antes posible",
  openGraph: {
    title: "Orden Recibida | Estilo Sumaq",
    description:
      "Información para recibir tus productos artesanales lo antes posible",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Imagen de tu página",
    //   },
    // ],
  },
  keywords: [
    "tienda artesanal",
    "artesanal",
    "pedido",
    "contacto",
    "productos artesanales",
    "orden",
    "recibida",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
