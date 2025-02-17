import SocialShare from "@/components/socialShare";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estilo Sumaq | Contacto",
  description:
    "Estamos aquí para ayudarle. Póngase en contacto con nosotros de nuestros productos artesanales",
  keywords: ["tienda artesanal", "artesanal", "mochila", "contacto"],
};

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto space-y-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contáctanos
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estamos aquí para ayudarle. Póngase en contacto con nosotros
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-3 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Información de Contacto</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Rellene el formulario o póngase directamente en contacto con
                nosotros
              </p>
            </div>
            <div className="space-y-2">
              <a href="tel:+51963321483" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (+51) 922 446 911
              </a>
              <a
                href="mailto:anyelaga19@gmail.com"
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                anyelaga19@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-start">
              <SocialShare />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name">Nombre</label>
                <Input id="first-name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name">Apellido</label>
                <Input id="last-name" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Correo</label>
              <Input id="email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Mensaje</label>
              <Textarea />
            </div>
            <Button className="w-full">Enviar Mensaje</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
