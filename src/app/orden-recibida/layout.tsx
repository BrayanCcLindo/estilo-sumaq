import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orden Recibida | Estilo Sumaq",
  description:
    "Recibe información sobre tu orden, metodos de pago y envio de cada uno de tus productos artesanales",
  openGraph: {
    title: "Orden Recibida | Estilo Sumaq",
    description:
      "Recibe información sobre tu orden, metodos de pago y envio de cada uno de tus productos artesanales",
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
    "orden recibida",
    "orden",
    "recibida",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
