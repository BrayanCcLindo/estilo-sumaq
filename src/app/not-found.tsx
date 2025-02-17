"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="rounded-xl bg-white p-8 text-center shadow-2xl">
        <ShoppingCart className="mx-auto mb-4 h-24 w-24 text-purple-600" />
        <h1 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-6xl font-bold text-transparent sm:text-8xl">
          404
        </h1>
        <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
          ¡Uy! Esta página se ha desviado
        </p>
        <Link
          href="/"
          className="inline-block transform rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Ver Colección
        </Link>
      </div>
    </div>
  );
}
