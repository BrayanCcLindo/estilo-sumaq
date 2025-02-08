"use client";

import type React from "react";

function ProductLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="relative h-64 w-64">
        {/* Cart */}
        <div className="absolute bottom-0 left-1/2 h-40 w-48 -translate-x-1/2 transform overflow-hidden rounded-t-3xl border-4 border-white">
          {/* Cart fill animation */}
          <div className="cart-fill absolute bottom-0 left-0 right-0 bg-yellow-300 opacity-70"></div>
        </div>

        {/* Cart handle */}
        <div className="absolute left-1/2 top-24 h-12 w-24 -translate-x-1/2 transform rounded-t-full border-4 border-white"></div>

        {/* Products */}
        <div className="product absolute bottom-40 left-8 h-12 w-12 rounded-lg bg-red-400"></div>
        <div className="product absolute bottom-40 left-1/2 h-12 w-12 -translate-x-1/2 transform rounded-full bg-green-400"></div>
        <div className="product absolute bottom-40 right-8 h-12 w-12 rotate-45 transform rounded-lg bg-blue-400"></div>

        {/* Loading text */}
        <div className="absolute left-1/2 top-full mt-8 -translate-x-1/2 transform text-2xl font-bold text-white">
          Cargando productos...
        </div>
      </div>
    </div>
  );
}

export default ProductLoader;
