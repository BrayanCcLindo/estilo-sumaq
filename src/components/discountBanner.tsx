"use client";

export default function ScrollingBanner() {
  return (
    <div className="w-full overflow-hidden bg-[#EAD7B7] py-2 text-black">
      <div className="animate-infinite-scroll inline-flex whitespace-nowrap">
        {/* Primera serie de textos */}
        <div className="flex">
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
        </div>
        {/* Duplicado exacto para crear el efecto infinito */}
        <div className="flex">
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
          <span className="mx-4">
            Envío gratis por compras mayores a S/.150.00
          </span>
        </div>
      </div>
    </div>
  );
}
