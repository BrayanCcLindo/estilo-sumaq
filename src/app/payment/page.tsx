"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useShoppingCart } from "@/hook/useShoppingCart";
import { useCheckoutStore } from "@/hook/useUserInformation";

export default function CheckoutForm() {
  const router = useRouter();
  const setFormData = useCheckoutStore((state) => state.setFormData);

  const { items } = useShoppingCart();
  const subTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subTotal + 15;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const onSubmit = (data: CheckoutFormData) => {
    const dateCode = format(new Date(), "MMdd");
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const uniqueCode = `${dateCode}${randomNum}`;
    const updatedData = {
      ...data,
      uniqueCode,
      createdAt: format(new Date(), "MMMM dd, yyyy", { locale: es }),
    };
    setFormData(updatedData);
    router.push("/orden-recibida");
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-6 text-3xl font-bold">Estilo Sumaq</h1>
        {/* <Image width={300} height={300} src={"/logo-sumaq.png"} alt="logo" /> */}
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-8 lg:grid-cols-3"
      >
        <div className="lg:col-span-2">
          <div className="rounded-lg border p-6">
            <h2 className="mb-6 text-xl font-bold">Detalle de compra</h2>
            <div className="grid gap-6">
              <div>
                <Label htmlFor="fullName">
                  Nombres y Apellidos <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    minLength: {
                      value: 3,
                      message: "El nombre debe tener al menos 3 caracteres",
                    },
                  }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <Input
                        {...field}
                        className="mt-1.5"
                        placeholder="Nombres y Apellidos"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-500">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <Label htmlFor="documentId">
                  DNI | Nro documento de identidad{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="documentId"
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^\d{8,12}$/,
                      message: "Ingrese un número de documento válido",
                    },
                  }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <Input
                        {...field}
                        className="mt-1.5"
                        placeholder="Nro documento de identidad"
                      />
                      {errors.documentId && (
                        <p className="text-sm text-red-500">
                          {errors.documentId.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <Label>
                  País / Región <span className="text-red-500">*</span>
                </Label>
                <div className="mt-1.5 text-sm">Perú</div>
              </div>

              <div>
                <Label htmlFor="region">
                  Región <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="region"
                  control={control}
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Seleccione una región" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lima">
                            Lima Metropolitana
                          </SelectItem>
                          <SelectItem value="callao">Callao</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.region && (
                        <p className="text-sm text-red-500">
                          {errors.region.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <Label htmlFor="district">
                  Provincia y Distrito <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="district"
                  control={control}
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <Input
                        {...field}
                        className="mt-1.5"
                        placeholder="Provincia y Distrito"
                      />
                      {errors.district && (
                        <p className="text-sm text-red-500">
                          {errors.district.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <Label htmlFor="address">
                  Dirección de la calle <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="address"
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    minLength: {
                      value: 5,
                      message: "La dirección debe tener al menos 5 caracteres",
                    },
                  }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <Input
                        {...field}
                        className="mt-1.5"
                        placeholder="Número de la calle y número de la casa"
                      />
                      {errors.address && (
                        <p className="text-sm text-red-500">
                          {errors.address.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <Label htmlFor="phone">
                  Teléfono <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^\d{9}$/,
                      message:
                        "Ingrese un número de teléfono válido de 9 dígitos",
                    },
                  }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <Input {...field} className="mt-1.5" />
                      {errors.phone && (
                        <p className="text-sm text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <Label htmlFor="email">
                  Dirección de correo electrónico{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Ingrese un correo electrónico válido",
                    },
                  }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <Input {...field} type="email" className="mt-1.5" />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* <Controller
                name="useAlternativeBilling"
                control={control}
                render={({ field }) => (
                  <div className="flex items-start gap-2">
                    <Checkbox id="billing" checked={field.value} onCheckedChange={field.onChange} />
                    <Label htmlFor="billing" className="font-normal">
                      ¿Otra dirección de facturación?
                    </Label>
                  </div>
                )}
              /> */}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border p-6">
            <h2 className="mb-6 text-xl font-bold">Tu orden</h2>
            <div className="grid gap-6">
              {items.map((product) => (
                <div key={product.id} className="flex gap-4">
                  <Image
                    src={product.imagen}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="aspect-square h-24 w-24 rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{product.title}</h3>
                    <p className="mt-1 text-sm">
                      {product.quantity} x{" "}
                      {product.price.toLocaleString("es-PE", {
                        currency: "PEN",
                        style: "currency",
                      })}
                    </p>
                  </div>
                  <div className="font-medium">
                    {" "}
                    {(product.quantity * product.price).toLocaleString(
                      "es-PE",
                      {
                        currency: "PEN",
                        style: "currency",
                      },
                    )}
                  </div>
                </div>
              ))}

              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between">
                  <span>Sub-total</span>
                  <span className="font-semibold">
                    {subTotal.toLocaleString("es-PE", {
                      currency: "PEN",
                      style: "currency",
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>

                  <p className="text-sm">
                    ENVÍO ESTÁNDAR:
                    <span className="ml-2 text-base font-semibold">
                      S/ 15.00
                    </span>
                  </p>
                </div>

                <div className="flex justify-between border-t pt-2 font-bold">
                  <span>Order Total</span>
                  <span>
                    {total.toLocaleString("es-PE", {
                      currency: "PEN",
                      style: "currency",
                    })}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold">Método de pago</h3>

                <div className="space-y-4">
                  <label className="flex items-start gap-2">
                    <input type="radio" className="mt-1" defaultChecked />
                    <div>
                      <div className="flex items-center gap-2">
                        <span>Paga con Yape o PLin</span>
                        <Image
                          src="/home/Screenshot 2025-02-23 at 7.41.41 PM.jpg"
                          alt="Yape"
                          width={50}
                          height={50}
                        />
                      </div>
                      <p className="mt-2 rounded-md bg-gray-50 p-3 text-sm">
                        Realizar tu pago con nuestro Qr o número. Nos enviará la
                        constancia por WhatsApp.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                Tus datos personales se utilizarán para procesar tu pedido,
                mejorar tu experiencia en esta web y otros propósitos descritos
                en nuestra Política de privacidad.
              </p>

              <Button
                type="submit"
                className="mt-6 w-full bg-black text-white hover:bg-black/90"
              >
                FINALIZAR COMPRA
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

{
  /* <label className="flex items-start gap-2">
                        <input
                          type="radio"
                          className="mt-1"
                          checked={field.value === "card"}
                          onChange={() => field.onChange("card")}
                        />
                        <div className="flex items-center gap-2">
                          <span>
                            Tarjeta de crédito y débito (comisión de S/ 3.75)
                          </span>
                          <CreditCard className="h-4 w-4" />
                        </div>
                      </label>
                      {errors.paymentMethod && (
                        <p className="text-sm text-red-500">
                          {errors.paymentMethod.message}
                        </p>
                      )} */
}
