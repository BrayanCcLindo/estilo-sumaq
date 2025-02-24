export default function FeaturesSection() {
  return (
    <div className="mt-4 w-full py-4 md:mt-8">
      <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
        {/* Delivery Feature */}
        <div className="flex items-start gap-4">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-fas-truck h-10 w-10"
            viewBox="0 0 640 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
          </svg>
          <div className="space-y-2 text-left">
            <h4 className="text-sm font-bold">Enviamos tu compra</h4>
            <p className="text-xs">Entregas a todo el país</p>
          </div>
        </div>

        {/* Payment Feature */}
        <div className="flex items-start gap-4">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-credit-card h-10 w-10"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"></path>
          </svg>
          <div className="space-y-2 text-left">
            <h4 className="text-sm font-bold">Paga como quieras</h4>
            <p className="text-xs">Yape o Plin</p>
          </div>
        </div>

        {/* Security Feature */}
        <div className="flex items-start gap-4">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-fas-lock h-10 w-10"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
          </svg>
          <div className="space-y-2 text-left">
            <h4 className="text-sm font-bold">Compra con seguridad</h4>
            <p className="text-xs">Tus datos siempre protegidos</p>
          </div>
        </div>
      </div>
      {/* <div className="mt-4 flex items-center justify-end">
        <Image
          width={80}
          height={80}
          alt=""
          src="/home/Screenshot 2025-02-23 at 7.41.41 PM.jpg"
        />
      </div> */}
    </div>
  );
}
