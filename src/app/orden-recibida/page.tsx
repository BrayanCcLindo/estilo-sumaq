"use client";

// import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useCheckoutStore } from "@/hook/useUserInformation";
import { useShoppingCart } from "@/hook/useShoppingCart";

export default function ConfirmationPage() {
  //   const router = useRouter();
  const { formData } = useCheckoutStore();
  const { items } = useShoppingCart();
  const subTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subTotal + 15;

  //   useEffect(() => {
  //     if (!formData) {
  //       router.push("/");
  //     }
  //   }, [formData, router]);

  //   if (!formData) return null;

  return (
    <div className="container mx-auto max-w-5xl space-y-16 px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-6 text-3xl font-bold">Estilo Sumaq</h1>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-far-credit-card h-4 w-4"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"></path>
            </svg>
            Pago Seguro
          </div>
          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-fas-user-lock h-4 w-4"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path>
            </svg>
            SSL Activado
          </div>
          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-fas-lock h-4 w-4"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
            </svg>
            Cifrado Extremo
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <p className="text-lg font-medium">
          Gracias. Tu pedido ha sido recibido.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <div className="text-sm text-gray-600">NÚMERO DE PEDIDO:</div>
            <div className="font-medium">{formData?.uniqueCode}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">FECHA:</div>
            <div className="font-medium">{formData?.createdAt}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">TOTAL:</div>
            <div className="font-medium">
              {total.toLocaleString("es-PE", {
                currency: "PEN",
                style: "currency",
              })}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">MÉTODO DE PAGO:</div>
            <div className="font-medium">Paga con Yape o PLin</div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/home/Screenshot 2025-02-23 at 7.41.41 PM.jpg"
            alt="Yape Logo"
            width={100}
            height={100}
            className="h-auto w-24"
          />

          <p className="text-center">
            Realizar tu pago con nuestro Qr o número. Nos enviará la constancia
            por WhatsApp.
          </p>

          <Image
            src="/yape.jpeg"
            alt="QR Code"
            width={200}
            height={200}
            className="h-auto w-48"
          />

          <h2 className="text-xl font-bold">Brayan Peter Ccari Lindo</h2>

          <div className="rounded-lg border border-gray-300 px-6 py-2 text-2xl font-bold">
            963 321 483
          </div>

          <div className="text-center">
            <div className="font-medium">Total a pagar:</div>
            <div className="text-2xl font-bold">
              {total.toLocaleString("es-PE", {
                currency: "PEN",
                style: "currency",
              })}
            </div>
          </div>

          <div className="space-y-4 text-center">
            <p className="font-bold">
              PASO 1: Escanea nuestro código QR o digita nuestro número de
              celular y procede a realizar el pago, puede yapear directamente
              desde tu YAPE o también hacer tu pago de PLIN hacia YAPE con el
              mismo código mostrado
            </p>
            <p className="font-bold">
              PASO 2: Envía tu comprobante de pago al WhatsApp 963321483 (ESTE
              ES EL NÚMERO QUE TE CONTACTARA CUANDO TU PEDIDO VA EN CAMINO)
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200">
        <h2 className="border-b border-gray-200 p-4 text-xl font-bold">
          Detalles del pedido
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th scope="col" className="p-4 text-left font-bold">
                Producto
              </th>
              <th scope="col" className="w-1/4 p-4 text-right font-bold">
                Total
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id} className="divide-x divide-gray-200">
                <td className="space-y-1 p-4">
                  <div>{item.title}</div>
                  <div className="pl-8 text-sm text-gray-600">
                    {item.quantity} x{" "}
                    {item.price.toLocaleString("es-PE", {
                      currency: "PEN",
                      style: "currency",
                    })}
                  </div>
                </td>
                <td className="p-4 text-right">
                  {(item.quantity * item.price).toLocaleString("es-PE", {
                    currency: "PEN",
                    style: "currency",
                  })}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="divide-y divide-gray-200">
            <tr className="divide-x divide-gray-200 border-t border-gray-200">
              <th scope="row" className="p-4 text-left font-normal">
                Subtotal:
              </th>
              <td className="p-4 text-right">
                {subTotal.toLocaleString("es-PE", {
                  currency: "PEN",
                  style: "currency",
                })}
              </td>
            </tr>

            <tr className="divide-x divide-gray-200">
              <th scope="row" className="p-4 text-left font-normal">
                Envío:
              </th>
              <td className="p-4 text-right">
                S/ 15.00
                <span className="hidden text-sm text-gray-600 md:block">
                  {" "}
                  vía ENVÍO ESTÁNDAR
                </span>
              </td>
            </tr>

            <tr className="divide-x divide-gray-200">
              <th scope="row" className="p-4 text-left font-normal">
                Método de pago:
              </th>
              <td className="p-4 text-right text-sm">Paga con Yape o PLin</td>
            </tr>

            <tr className="divide-x divide-gray-200">
              <th scope="row" className="p-4 text-left font-normal">
                Total:
              </th>
              <td className="p-4 text-right">
                {total.toLocaleString("es-PE", {
                  currency: "PEN",
                  style: "currency",
                })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="font-bold">Nombres y Apellidos:</div>
            <div className="mt-2">{formData?.fullName}</div>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <div className="font-bold">DNI | Nro documento de identidad:</div>
            <div className="mt-2">{formData?.documentId}</div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="mb-4 font-bold">Dirección de facturación</div>
            <div className="space-y-1">
              <div>{formData?.address}</div>
              <div>{formData?.district}</div>
              <div>{formData?.region}</div>
              <div className="flex items-center gap-2 pt-2">
                <Phone className="h-4 w-4" />
                <span>{formData?.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{formData?.email}</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <div className="mb-4 font-bold">Dirección de envío</div>
            <div className="space-y-1">
              <div>{formData?.address}</div>
              <div>{formData?.district}</div>
              <div>{formData?.region}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
