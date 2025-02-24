import ContactCard from "@/components/ContactSocialMedia";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contacto | Estilo Sumaq",
  description:
    "Estamos aquí para ayudarle. Póngase en contacto con nosotros de nuestros productos artesanales",
  keywords: ["tienda artesanal", "artesanal", "mochila", "contacto"],
};

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-gray-100">
      <div className="relative h-72 md:h-80 lg:h-[600px]">
        <Image
          src={"/home/portada-contacto.jpg"}
          alt={`Banner de contacto`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold capitalize text-white md:text-5xl lg:text-6xl">
            Contáctanos
          </h1>
        </div>
      </div>
      <div className="container mx-auto space-y-16">
        <div className="flex flex-col items-center space-y-4 text-center"></div>
        <div className="p-4 md:p-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Información de Contacto</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Si deseas contactarnos, aquí abajo encontrarás nuestras redes
                sociales. ¡Estamos encantados de ayudarte con cualquier duda!
              </p>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-2">
              <ContactCard
                icon={<Mail className="h-5 w-5 text-blue-500" />}
                title="Email"
                value="sumaqestilo@gmail.com"
                href="mailto:sumaqestilo@gmail.com"
              />
              <ContactCard
                icon={<Phone className="h-5 w-5 text-green-500" />}
                title="WhatsApp"
                value="963 321 483"
                href="https://wa.link/zgzbuz"
              />

              <ContactCard
                icon={
                  <Facebook className="h-5 w-5 text-blue-600" fill="blue-600" />
                }
                title="Facebook"
                value="EstiloSumaq.facebook"
                href="https://www.facebook.com/profile.php?id=61571306134739"
              />
              <ContactCard
                icon={<Instagram className="h-5 w-5 text-pink-500" />}
                title="Instagram"
                value="@estilosumaq"
                href="https://www.instagram.com/estilosumaq/"
              />
              <ContactCard
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                }
                title="TikTok"
                value="@estilo_sumaq"
                href="https://www.tiktok.com/@estilo_sumaq?_t=ZM-8tz9XWlArrj&_r=1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
